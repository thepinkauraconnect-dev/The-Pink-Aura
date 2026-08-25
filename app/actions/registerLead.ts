'use server';

import { LeadFormData, LeadActionResult } from '@/types/leads';
import { saveLeadToFirestore } from '@/lib/firebase/config';
import { sendOwnerNotificationEmail, sendCustomerConfirmationEmail } from '@/lib/resend/emails';

export async function registerLead(formData: LeadFormData): Promise<LeadActionResult> {
  // Honeypot spam protection check
  if (formData.honeypot && formData.honeypot.trim() !== '') {
    return {
      success: true,
      message: 'Request submitted successfully.',
      leadId: 'sp-ignored',
    };
  }

  const errors: Record<string, string> = {};

  // Server-side validation
  const name = formData.name ? formData.name.trim() : '';
  const phone = formData.phone ? formData.phone.trim() : '';
  const email = formData.email ? formData.email.trim().toLowerCase() : '';
  const category = formData.category ? formData.category.trim() : '';
  const requirement = formData.requirement ? formData.requirement.trim() : '';

  if (!name || name.length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!phone || phone.length < 7) {
    errors.phone = 'Please enter a valid phone number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!category) {
    errors.category = 'Please select a service category of interest.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted errors in the form.',
      errors,
    };
  }

  try {
    const createdAt = new Date().toISOString();

    // 1. Save Lead to Firestore
    const firestoreResult = await saveLeadToFirestore({
      name,
      phone,
      email,
      category,
      requirement,
      source: 'website',
      status: 'new',
      createdAt,
    });

    // 2. Dispatch Emails (Owner notification & Customer confirmation)
    Promise.allSettled([
      sendOwnerNotificationEmail({ name, phone, email, category, requirement }),
      sendCustomerConfirmationEmail({ name, email, category }),
    ]).then((results) => {
      results.forEach((res, index) => {
        if (res.status === 'rejected') {
          console.error(`[Email Dispatch ${index === 0 ? 'Owner' : 'Customer'} Error]`, res.reason);
        }
      });
    });

    return {
      success: true,
      message: 'Your Pink Aura consultation inquiry has been submitted successfully.',
      leadId: firestoreResult.id,
    };
  } catch (error) {
    console.error('[Register Lead Action Exception]', error);
    return {
      success: false,
      message: 'An unexpected system error occurred while processing your request. Please try again or contact us directly.',
      errors: {
        general: 'Server communication error.',
      },
    };
  }
}
