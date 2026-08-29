import { Resend } from 'resend';
import { CLINIC_INFO } from '@/data/services';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey && !resendApiKey.includes('mock') ? new Resend(resendApiKey) : null;

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
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const fontStack = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead Consultation Inquiry — The Pink Aura</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #FAF4F6; font-family: ${fontStack}; -webkit-font-smoothing: antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF4F6; padding: 32px 12px;">
        <tr>
          <td align="center">
            
            <!-- Main Claymorphic Card Container -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #ffffff; border-radius: 28px; overflow: hidden; border: 2px solid #F3E5EB; box-shadow: 0 16px 40px rgba(158, 77, 104, 0.10);">
              
              <!-- Claymorphic Top Header -->
              <tr>
                <td style="padding: 32px 28px 24px 28px; text-align: center; background: linear-gradient(180deg, #FDF5F8 0%, #FFFFFF 100%); border-bottom: 1px solid #F3E5EB;">
                  <!-- Brand Pill -->
                  <div style="display: inline-block; background: linear-gradient(135deg, #9E4D68 0%, #7A2846 100%); color: #ffffff; border-radius: 50px; padding: 6px 18px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 4px 12px rgba(158, 77, 104, 0.25); margin-bottom: 12px;">
                    The Pink Aura
                  </div>
                  <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 800; color: #292524; letter-spacing: -0.3px;">
                    New Consultation Request
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #78716C; font-weight: 500;">
                    Executive Lead System Notification
                  </p>
                </td>
              </tr>

              <!-- Clay Field Cards Grid -->
              <tr>
                <td style="padding: 24px 28px;">
                  
                  <!-- 1. Client Name Card -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-radius: 16px; padding: 14px 18px; margin-bottom: 12px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 4px;">
                      Client Name
                    </div>
                    <div style="font-size: 16px; font-weight: 700; color: #1C1917;">
                      ${lead.name}
                    </div>
                  </div>

                  <!-- 2. Phone Number Card with Call Action -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-radius: 16px; padding: 14px 18px; margin-bottom: 12px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 4px;">
                            Phone Number
                          </div>
                          <div style="font-size: 16px; font-weight: 700; color: #1C1917;">
                            ${lead.phone}
                          </div>
                        </td>
                        <td align="right" style="vertical-align: middle;">
                          <a href="${telLink}" style="display: inline-block; background: linear-gradient(135deg, #9E4D68 0%, #7A2846 100%); color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 16px; border-radius: 50px; box-shadow: 0 4px 10px rgba(158, 77, 104, 0.3);">
                            📞 Call
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- 3. Email Address Card with Email Action -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-radius: 16px; padding: 14px 18px; margin-bottom: 12px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 4px;">
                            Email Address
                          </div>
                          <div style="font-size: 14px; font-weight: 700; color: #1C1917; word-break: break-all;">
                            ${lead.email}
                          </div>
                        </td>
                        <td align="right" style="vertical-align: middle; padding-left: 8px;">
                          <a href="${mailtoLink}" style="display: inline-block; background: linear-gradient(135deg, #4A1D2F 0%, #290E1B 100%); color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 16px; border-radius: 50px; box-shadow: 0 4px 10px rgba(74, 29, 47, 0.3);">
                            ✉️ Email
                          </a>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- 4. Interested Category Card -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-radius: 16px; padding: 14px 18px; margin-bottom: 12px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 6px;">
                      Interested Service Category
                    </div>
                    <div style="display: inline-block; background-color: #ffffff; border: 1px solid #E8C8D4; padding: 6px 14px; border-radius: 50px; font-size: 13px; font-weight: 700; color: #7A2846; box-shadow: 0 2px 6px rgba(158, 77, 104, 0.08);">
                      ✨ ${lead.category}
                    </div>
                  </div>

                  <!-- 5. Specific Requirement Block Card -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-radius: 16px; padding: 16px 18px; margin-bottom: 12px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 6px;">
                      Specific Requirement Details
                    </div>
                    <div style="font-size: 14px; color: #292524; line-height: 1.6; font-weight: 500; white-space: pre-wrap; background-color: #ffffff; border-radius: 12px; padding: 12px 14px; border: 1px solid #F3E5EB;">
                      ${lead.requirement || 'No specific notes provided.'}
                    </div>
                  </div>

                  <!-- 6. Date & Time -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-radius: 16px; padding: 12px 18px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 2px;">
                      Date & Time Received
                    </div>
                    <div style="font-size: 13px; color: #57534E; font-weight: 600;">
                      🕒 ${timestamp}
                    </div>
                  </div>

                </td>
              </tr>

              <!-- Claymorphic Quick Contact Action Container -->
              <tr>
                <td style="padding: 0 28px 28px 28px;">
                  <div style="background: linear-gradient(135deg, #FDF4F7 0%, #F5E6EC 100%); border-radius: 20px; padding: 22px 20px; text-align: center; border: 1.5px solid #E8C8D4; box-shadow: 0 8px 20px rgba(158, 77, 104, 0.08);">
                    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #7A2846; margin-bottom: 14px;">
                      Direct Client Communication Options
                    </div>
                    <div>
                      <a href="${telLink}" style="display: inline-block; background: linear-gradient(135deg, #9E4D68 0%, #7A2846 100%); color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 50px; margin: 4px; box-shadow: 0 6px 16px rgba(158, 77, 104, 0.25);">
                        📞 Call Client (${lead.phone})
                      </a>
                      <a href="${mailtoLink}" style="display: inline-block; background: linear-gradient(135deg, #4A1D2F 0%, #290E1B 100%); color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 50px; margin: 4px; box-shadow: 0 6px 16px rgba(74, 29, 47, 0.25);">
                        ✉️ Email Client (${lead.email})
                      </a>
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #FAF4F6; padding: 18px 28px; text-align: center; border-top: 1px solid #F3E5EB; font-size: 12px; color: #78716C; font-weight: 500;">
                  The Pink Aura — Aesthetic & Wellness Centre<br>
                  <span style="font-size: 11px; color: #A8A29E; font-weight: 400;">#112, 1st Floor, 16th Cross, 4th Phase JP Nagar, Dollars Colony, Bangalore – 560078</span>
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

  const fontStack = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Consultation Inquiry — The Pink Aura</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #FAF4F6; font-family: ${fontStack}; -webkit-font-smoothing: antialiased;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #FAF4F6; padding: 32px 12px;">
        <tr>
          <td align="center">
            
            <!-- Main Claymorphic Card Container -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 580px; background-color: #ffffff; border-radius: 28px; overflow: hidden; border: 2px solid #F3E5EB; box-shadow: 0 16px 40px rgba(158, 77, 104, 0.10);">
              
              <!-- Brand Header -->
              <tr>
                <td style="padding: 36px 28px 24px 28px; text-align: center; background: linear-gradient(180deg, #FDF5F8 0%, #FFFFFF 100%); border-bottom: 1px solid #F3E5EB;">
                  <div style="display: inline-block; background: linear-gradient(135deg, #9E4D68 0%, #7A2846 100%); color: #ffffff; border-radius: 50px; padding: 6px 18px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 4px 12px rgba(158, 77, 104, 0.25); margin-bottom: 12px;">
                    The Pink Aura
                  </div>
                  <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 800; color: #292524; letter-spacing: -0.3px;">
                    Consultation Request Received
                  </h1>
                  <p style="margin: 0; font-size: 13px; color: #78716C; font-weight: 500;">
                    Aesthetic & Wellness Centre
                  </p>
                </td>
              </tr>

              <!-- Greeting & Content Section -->
              <tr>
                <td style="padding: 28px 28px 20px 28px;">
                  <h2 style="font-size: 18px; font-weight: 700; color: #1C1917; margin: 0 0 14px 0;">
                    Dear ${lead.name},
                  </h2>
                  <p style="font-size: 14px; color: #44403C; line-height: 1.7; margin: 0 0 20px 0;">
                    Thank you for reaching out to <strong>The Pink Aura — Aesthetic & Wellness Centre</strong>. We have received your consultation inquiry regarding:
                  </p>

                  <!-- Requested Service Clay Card -->
                  <div style="background-color: #FAF4F6; border: 1.5px solid #F0D5E0; border-left: 5px solid #9E4D68; border-radius: 16px; padding: 18px 20px; margin-bottom: 20px; box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8);">
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #9E4D68; margin-bottom: 4px;">
                      Selected Consultation Category
                    </div>
                    <div style="font-size: 16px; font-weight: 800; color: #1C1917;">
                      ✨ ${lead.category}
                    </div>
                  </div>

                  <p style="font-size: 14px; color: #44403C; line-height: 1.7; margin: 0 0 24px 0;">
                    Our medical aesthetic team and wellness consultants are currently reviewing your details and will get in touch with you shortly to schedule your personalized consultation.
                  </p>
                </td>
              </tr>

              <!-- Interactive Direct Contact Clay Card -->
              <tr>
                <td style="padding: 0 28px 28px 28px;">
                  <div style="background: linear-gradient(135deg, #FDF4F7 0%, #F5E6EC 100%); border-radius: 20px; padding: 22px 20px; text-align: center; border: 1.5px solid #E8C8D4; box-shadow: 0 8px 20px rgba(158, 77, 104, 0.08);">
                    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #7A2846; margin-bottom: 14px;">
                      Need Immediate Assistance? Connect With Us Directly
                    </div>
                    <div>
                      <a href="${clinicPhoneLink}" style="display: inline-block; background: linear-gradient(135deg, #9E4D68 0%, #7A2846 100%); color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 50px; margin: 4px; box-shadow: 0 6px 16px rgba(158, 77, 104, 0.25);">
                        📞 Call Clinic: ${CLINIC_INFO.phone}
                      </a>
                      <a href="${clinicMailtoLink}" style="display: inline-block; background: linear-gradient(135deg, #4A1D2F 0%, #290E1B 100%); color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 50px; margin: 4px; box-shadow: 0 6px 16px rgba(74, 29, 47, 0.25);">
                        ✉️ Email Support
                      </a>
                    </div>
                    <div style="font-size: 12px; color: #78716C; font-weight: 500; margin-top: 14px;">
                      📍 <strong>Address:</strong> ${CLINIC_INFO.address}
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Signature Section -->
              <tr>
                <td style="padding: 0 28px 32px 28px; text-align: center;">
                  <div style="font-style: italic; color: #9E4D68; font-size: 14px; font-weight: 600; margin-bottom: 20px;">
                    "${CLINIC_INFO.tagline}"
                  </div>

                  <div style="border-top: 1px dashed #F0D5E0; padding-top: 20px; font-size: 13px; color: #57534E;">
                    <div style="font-weight: 700; color: #1C1917; margin-bottom: 2px;">Warm Regards,</div>
                    <div style="font-weight: 800; color: #9E4D68;">Dr. Yashaswini HV & Nagendra Karanik</div>
                    <div style="font-size: 12px; color: #78716C; font-weight: 500;">Founders, The Pink Aura Aesthetic & Wellness Centre</div>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #FAF4F6; padding: 18px 28px; text-align: center; border-top: 1px solid #F3E5EB; font-size: 11px; color: #A8A29E; font-weight: 500;">
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
      subject: `Thank You for Trusting The Pink Aura — Consultation Request Received`,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error('[Resend Customer Email Failed]', error);
    return { success: false, error };
  }
}
