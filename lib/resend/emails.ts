import { Resend } from 'resend';
import { CLINIC_INFO } from '@/data/services';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey && !resendApiKey.includes('mock') ? new Resend(resendApiKey) : null;

// Use custom configured sender, or fallback during local dev / testing
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
  const cleanPhone = lead.phone.replace(/[^0-9+]/g, '');
  const telLink = `tel:${cleanPhone}`;
  const mailtoLink = `mailto:${lead.email}?subject=${encodeURIComponent('The Pink Aura — Regarding Your Consultation Request')}`;
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Request — The Pink Aura</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #FAF6F8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF6F8; padding: 40px 15px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #F0D5E0; box-shadow: 0 20px 40px rgba(158, 77, 104, 0.08);">
              
              <!-- Luxury Header Banner -->
              <tr>
                <td style="background: linear-gradient(135deg, #7A2846 0%, #9E4D68 50%, #C87D94 100%); padding: 36px 32px; text-align: center; color: #ffffff;">
                  <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 26px; font-weight: bold; letter-spacing: 0.5px; margin-bottom: 6px;">
                    The Pink Aura
                  </div>
                  <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #FBEAF0; font-weight: 600;">
                    Executive Lead Notification System
                  </div>
                </td>
              </tr>

              <!-- Alert Header -->
              <tr>
                <td style="padding: 24px 32px 12px 32px; text-align: left;">
                  <div style="display: inline-block; background-color: #FDF2F6; border: 1px solid #F7C5D6; border-radius: 50px; padding: 6px 16px; font-size: 12px; font-weight: bold; color: #9E4D68; text-transform: uppercase; letter-spacing: 1px;">
                    ⚡ Action Required • New Lead Inquiry
                  </div>
                </td>
              </tr>

              <!-- Lead Info Section -->
              <tr>
                <td style="padding: 12px 32px 28px 32px;">
                  <h1 style="font-family: Georgia, serif; font-size: 22px; color: #1C1917; margin: 0 0 20px 0; font-weight: bold;">
                    Consultation Lead Details
                  </h1>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: separate; border-spacing: 0 12px;">
                    
                    <!-- Client Name -->
                    <tr>
                      <td width="35%" style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 10px 0 0 10px; font-size: 13px; font-weight: bold; color: #57534E; uppercase; letter-spacing: 0.5px;">
                        👤 Client Name
                      </td>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 0 10px 10px 0; font-size: 15px; font-weight: bold; color: #1C1917;">
                        ${lead.name}
                      </td>
                    </tr>

                    <!-- Phone Number with Interactive Call Action -->
                    <tr>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 10px 0 0 10px; font-size: 13px; font-weight: bold; color: #57534E;">
                        📞 Phone Number
                      </td>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 0 10px 10px 0; font-size: 15px; font-weight: bold; color: #1C1917;">
                        <span style="vertical-align: middle; margin-right: 8px;">${lead.phone}</span>
                        <a href="${telLink}" style="display: inline-block; vertical-align: middle; background-color: #22C55E; color: #ffffff; text-decoration: none; padding: 6px 14px; border-radius: 50px; font-size: 12px; font-weight: bold; font-family: sans-serif; box-shadow: 0 2px 6px rgba(34, 197, 94, 0.3);">
                          📞 Call Now
                        </a>
                      </td>
                    </tr>

                    <!-- Email Address with Interactive Email Action -->
                    <tr>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 10px 0 0 10px; font-size: 13px; font-weight: bold; color: #57534E;">
                        ✉️ Email Address
                      </td>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 0 10px 10px 0; font-size: 15px; font-weight: bold; color: #1C1917;">
                        <span style="vertical-align: middle; margin-right: 8px;">${lead.email}</span>
                        <a href="${mailtoLink}" style="display: inline-block; vertical-align: middle; background-color: #9E4D68; color: #ffffff; text-decoration: none; padding: 6px 14px; border-radius: 50px; font-size: 12px; font-weight: bold; font-family: sans-serif; box-shadow: 0 2px 6px rgba(158, 77, 104, 0.3);">
                          ✉️ Send Email
                        </a>
                      </td>
                    </tr>

                    <!-- Service Category -->
                    <tr>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 10px 0 0 10px; font-size: 13px; font-weight: bold; color: #57534E;">
                        ✨ Category
                      </td>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 0 10px 10px 0; font-size: 14px; font-weight: bold; color: #9E4D68;">
                        <span style="background-color: #FDF2F6; border: 1px solid #F5E6EC; padding: 4px 12px; border-radius: 6px; display: inline-block;">
                          ${lead.category}
                        </span>
                      </td>
                    </tr>

                    <!-- Requirement Details Box -->
                    <tr>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 10px 0 0 10px; font-size: 13px; font-weight: bold; color: #57534E; vertical-align: top;">
                        📝 Specific Need
                      </td>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 0 10px 10px 0; font-size: 14px; color: #292524; line-height: 1.6; white-space: pre-wrap;">
                        ${lead.requirement || 'No additional requirement notes provided.'}
                      </td>
                    </tr>

                    <!-- Received Timestamp -->
                    <tr>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 10px 0 0 10px; font-size: 13px; font-weight: bold; color: #57534E;">
                        🕒 Date & Time
                      </td>
                      <td style="background-color: #FAF8F5; padding: 14px 16px; border-radius: 0 10px 10px 0; font-size: 13px; color: #78716C;">
                        ${timestamp}
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>

              <!-- Big Direct Action Callout Section -->
              <tr>
                <td style="padding: 0 32px 32px 32px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #FAF3F5 0%, #F5E6EC 100%); border-radius: 16px; padding: 20px; text-align: center; border: 1px solid #E8C8D4;">
                    <tr>
                      <td>
                        <div style="font-size: 14px; font-weight: bold; color: #7A2846; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                          Immediate Lead Contact Options
                        </div>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center" style="padding: 4px;">
                              <a href="${telLink}" style="display: inline-block; background-color: #22C55E; color: #ffffff; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin: 4px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.25);">
                                📞 Call Client (${lead.phone})
                              </a>
                              <a href="${mailtoLink}" style="display: inline-block; background-color: #9E4D68; color: #ffffff; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px; margin: 4px; box-shadow: 0 4px 12px rgba(158, 77, 104, 0.25);">
                                ✉️ Email Client (${lead.email})
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Luxury Footer -->
              <tr>
                <td style="background-color: #FAF8F5; padding: 20px 32px; text-align: center; border-top: 1px solid #F0D5E0; font-size: 12px; color: #A8A29E;">
                  <div style="font-weight: 600; color: #78716C; margin-bottom: 4px;">The Pink Aura — Aesthetic & Wellness Centre</div>
                  <div>#112, 1st Floor, 16th Cross, 4th Phase JP Nagar, Dollars Colony, Bangalore – 560078</div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  if (!resend) {
    console.log('[Resend Mock Owner Email] Target:', targetEmail, 'Payload:', lead);
    return { success: true, mock: true };
  }

  try {
    await resend.emails.send({
      from: getFromEmail('consultation'),
      to: [targetEmail],
      subject: `🚨 New Lead: ${lead.name} — ${lead.category}`,
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
  const clinicPhoneLink = `tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`;
  const clinicMailtoLink = `mailto:${CLINIC_INFO.email}?subject=${encodeURIComponent('Inquiry Regarding Consultation — The Pink Aura')}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Pink Aura Consultation Journey</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #FAF6F8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF6F8; padding: 40px 15px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #F0D5E0; box-shadow: 0 20px 40px rgba(158, 77, 104, 0.08);">
              
              <!-- Brand Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #7A2846 0%, #9E4D68 50%, #C87D94 100%); padding: 40px 32px; text-align: center; color: #ffffff;">
                  <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: bold; letter-spacing: 0.5px; margin-bottom: 6px;">
                    The Pink Aura
                  </div>
                  <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 3px; color: #FBEAF0; font-weight: 500;">
                    Aesthetic & Wellness Centre
                  </div>
                </td>
              </tr>

              <!-- Greeting & Content -->
              <tr>
                <td style="padding: 36px 32px 20px 32px;">
                  <h2 style="font-family: Georgia, serif; font-size: 22px; color: #1C1917; margin: 0 0 16px 0; font-weight: normal;">
                    Dear ${lead.name},
                  </h2>
                  <p style="font-size: 15px; color: #44403C; line-height: 1.7; margin-bottom: 20px;">
                    Thank you for reaching out to <strong>The Pink Aura — Aesthetic & Wellness Centre</strong>. We have successfully received your inquiry for:
                  </p>

                  <!-- Requested Service Card -->
                  <div style="background-color: #FDF2F6; border: 1px solid #F5E6EC; border-left: 4px solid #9E4D68; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #9E4D68; font-weight: bold; margin-bottom: 4px;">
                      Selected Consultation Category
                    </div>
                    <div style="font-family: Georgia, serif; font-size: 18px; font-weight: bold; color: #1C1917;">
                      ${lead.category}
                    </div>
                  </div>

                  <p style="font-size: 15px; color: #44403C; line-height: 1.7; margin-bottom: 24px;">
                    Our senior medical aesthetic doctors and wellness consultants are currently reviewing your request. We will reach out to you shortly to assist in scheduling your personalized consultation.
                  </p>
                </td>
              </tr>

              <!-- Interactive Contact Direct Line -->
              <tr>
                <td style="padding: 0 32px 28px 32px;">
                  <div style="background-color: #FAF8F5; border-radius: 16px; padding: 24px; border: 1px solid #F0D5E0; text-align: center;">
                    <div style="font-size: 14px; font-weight: bold; color: #1C1917; margin-bottom: 12px;">
                      Need Immediate Assistance? Connect With Us Directly
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                      <a href="${clinicPhoneLink}" style="display: inline-block; background-color: #22C55E; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 13px; font-weight: bold; margin: 4px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.25);">
                        📞 Call Clinic: ${CLINIC_INFO.phone}
                      </a>
                      <a href="${clinicMailtoLink}" style="display: inline-block; background-color: #9E4D68; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 13px; font-weight: bold; margin: 4px; box-shadow: 0 4px 12px rgba(158, 77, 104, 0.25);">
                        ✉️ Email Support
                      </a>
                    </div>

                    <div style="font-size: 12px; color: #78716C;">
                      📍 <strong>Address:</strong> ${CLINIC_INFO.address}
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Signature & Tagline -->
              <tr>
                <td style="padding: 0 32px 36px 32px; text-align: center;">
                  <div style="font-family: Georgia, serif; font-style: italic; color: #9E4D68; font-size: 15px; margin-bottom: 24px;">
                    "${CLINIC_INFO.tagline}"
                  </div>

                  <div style="border-top: 1px dashed #F0D5E0; pt-24; padding-top: 20px; font-size: 13px; color: #57534E;">
                    <div style="font-weight: bold; color: #1C1917; margin-bottom: 2px;">Warm Regards,</div>
                    <div style="font-weight: 600; color: #9E4D68;">Dr. Yashaswini HV & Nagendra Karanik</div>
                    <div style="font-size: 12px; color: #78716C;">Founders, The Pink Aura Aesthetic & Wellness Centre</div>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #FAF8F5; padding: 16px 32px; text-align: center; border-top: 1px solid #F0D5E0; font-size: 11px; color: #A8A29E;">
                  © ${new Date().getFullYear()} The Pink Aura. All rights reserved.
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
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
