import { Resend } from 'resend';
import { CLINIC_INFO } from '@/data/services';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey && !resendApiKey.includes('mock') ? new Resend(resendApiKey) : null;

// Use custom configured sender, or fallback to onboarding@resend.dev during local dev
const getFromEmail = (type: 'consultation' | 'welcome') => {
  if (process.env.RESEND_FROM_EMAIL) {
    return process.env.RESEND_FROM_EMAIL;
  }
  if (process.env.NODE_ENV !== 'production') {
    return 'The Pink Aura <onboarding@resend.dev>';
  }
  return type === 'consultation'
    ? 'The Pink Aura <consultation@thepinkaura.co.in>'
    : 'The Pink Aura <welcome@thepinkaura.co.in>';
};

export async function sendOwnerNotificationEmail(lead: {
  name: string;
  phone: string;
  email: string;
  category: string;
  requirement: string;
}) {
  const targetEmail = process.env.PINK_AURA_NOTIFICATION_EMAIL || CLINIC_INFO.email;

  const html = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FAF8F5; padding: 40px 20px; color: #1C1917;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid #F5E6EC; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
        <div style="border-bottom: 2px solid #C87D94; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #9E4D68; font-size: 22px; margin: 0;">New Consultation Request</h2>
          <p style="color: #78716C; font-size: 14px; margin-top: 4px;">The Pink Aura Website Lead Notification</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; font-weight: bold; width: 35%; color: #44403C;">Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; color: #1C1917;">${lead.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; font-weight: bold; color: #44403C;">Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; color: #1C1917;">${lead.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; font-weight: bold; color: #44403C;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; color: #1C1917;"><a href="mailto:${lead.email}" style="color: #C87D94;">${lead.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; font-weight: bold; color: #44403C;">Interested Category:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; color: #9E4D68; font-weight: 600;">${lead.category}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; font-weight: bold; color: #44403C; vertical-align: top;">Requirement:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #FAF3F5; color: #1C1917; white-space: pre-wrap;">${lead.requirement || 'None specified'}</td>
          </tr>
        </table>
        
        <div style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #F5E6EC; font-size: 12px; color: #A8A29E; text-align: center;">
          Sent automatically from The Pink Aura Website Lead System
        </div>
      </div>
    </div>
  `;

  if (!resend) {
    console.log('[Resend Mock Owner Email] Target:', targetEmail, 'Payload:', lead);
    return { success: true, mock: true };
  }

  try {
    await resend.emails.send({
      from: getFromEmail('consultation'),
      to: [targetEmail],
      subject: `New Pink Aura Consultation Request: ${lead.name} (${lead.category})`,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('[Resend Owner Email Failed]', error);
    return { success: false, error };
  }
}

export async function sendCustomerConfirmationEmail(lead: {
  name: string;
  email: string;
  category: string;
}) {
  const html = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #FAF8F5; padding: 40px 20px; color: #1C1917;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 40px; border: 1px solid #F5E6EC; text-align: center;">
        <h1 style="color: #9E4D68; font-family: Georgia, serif; font-size: 26px; font-weight: normal; margin-bottom: 8px;">The Pink Aura</h1>
        <p style="color: #C87D94; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin-top: 0; margin-bottom: 32px;">Aesthetic & Wellness Centre</p>
        
        <div style="background-color: #FAF3F5; border-radius: 12px; padding: 24px; margin-bottom: 28px; text-align: left;">
          <p style="font-size: 16px; color: #1C1917; margin-top: 0;">Dear ${lead.name},</p>
          <p style="font-size: 15px; color: #44403C; line-height: 1.6;">Thank you for beginning your Pink Aura journey. We have received your inquiry regarding <strong>${lead.category}</strong>.</p>
          <p style="font-size: 15px; color: #44403C; line-height: 1.6;">Our aesthetic care team is currently reviewing your details and will get in touch with you shortly to assist with your personalized consultation.</p>
        </div>

        <p style="font-style: italic; color: #9E4D68; font-size: 14px; margin-bottom: 32px;">"Enhance Your Beauty • Elevate Your Aura"</p>

        <div style="border-top: 1px solid #F5E6EC; padding-top: 24px; font-size: 13px; color: #78716C; text-align: center;">
          <p style="margin: 4px 0; font-weight: 500;">The Pink Aura — Aesthetic & Wellness Centre</p>
          <p style="margin: 4px 0;">#112, 1st Floor, 16th Cross, 4th Phase JP Nagar, Dollars Colony, Bangalore</p>
          <p style="margin: 4px 0;"><a href="mailto:${CLINIC_INFO.email}" style="color: #C87D94;">${CLINIC_INFO.email}</a></p>
        </div>
      </div>
    </div>
  `;

  if (!resend) {
    console.log('[Resend Mock Customer Email] Target:', lead.email);
    return { success: true, mock: true };
  }

  try {
    await resend.emails.send({
      from: getFromEmail('welcome'),
      to: [lead.email],
      subject: `Your Pink Aura Journey Begins — Consultation Request Received`,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('[Resend Customer Email Failed]', error);
    return { success: false, error };
  }
}
