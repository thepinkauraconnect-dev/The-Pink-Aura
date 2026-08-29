/**
 * Instant Mobile Alert Dispatcher for The Pink Aura
 * Sends real-time notifications to WhatsApp and/or Telegram when a client registers.
 */

export async function sendInstantMobileAlert(lead: {
  name: string;
  phone: string;
  email: string;
  category: string;
  requirement?: string;
}) {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;
  const whatsappPhone = process.env.WHATSAPP_ALERT_PHONE; // e.g. 917619151455, 916362348467
  const whatsappApiKey = process.env.WHATSAPP_CALLMEBOT_API_KEY; // CallMeBot API Key
  const whatsappWebhookUrl = process.env.WHATSAPP_WEBHOOK_URL;

  const alertMessage = 
    `🌸 *NEW CONSULTATION LEAD — THE PINK AURA* 🌸\n\n` +
    `👤 *Client Name:* ${lead.name}\n` +
    `📞 *Phone:* ${lead.phone}\n` +
    `✉️ *Email:* ${lead.email}\n` +
    `✨ *Category:* ${lead.category}\n` +
    `📝 *Requirement:* ${lead.requirement || 'Not specified'}\n` +
    `🕒 *Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

  // 1. Direct WhatsApp Message via CallMeBot (Free WhatsApp API)
  if (whatsappPhone && whatsappApiKey) {
    try {
      const phones = whatsappPhone.split(',').map((p) => p.trim());
      const apiKeys = whatsappApiKey.split(',').map((k) => k.trim());

      for (let i = 0; i < phones.length; i++) {
        const phone = phones[i].replace(/[^0-9]/g, '');
        const apiKey = apiKeys[i] || apiKeys[0];

        const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(alertMessage)}&apikey=${apiKey}`;
        const response = await fetch(url);
        if (response.ok) {
          console.log(`[WhatsApp Alert Sent to ${phone}] Lead:`, lead.name);
        } else {
          console.error(`[WhatsApp Alert Error for ${phone}] Status:`, response.status);
        }
      }
    } catch (err) {
      console.error('[WhatsApp Dispatch Exception]', err);
    }
  }

  // 2. Dispatch Custom WhatsApp Webhook (e.g. UltraMsg / Twilio / Zapier / Make)
  if (whatsappWebhookUrl) {
    try {
      await fetch(whatsappWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          brand: 'The Pink Aura',
          alertMessage,
          lead,
          timestamp: new Date().toISOString(),
        }),
      });
      console.log('[WhatsApp Webhook Triggered Successfully] Lead:', lead.name);
    } catch (err) {
      console.error('[WhatsApp Webhook Exception]', err);
    }
  }

  // 3. Dispatch Telegram Mobile Notification (if configured)
  if (telegramBotToken && telegramChatId) {
    try {
      const cleanPhone = lead.phone.replace(/[^0-9+]/g, '');
      const telegramText = 
        `${alertMessage}\n\n` +
        `👉 [Click to Call: ${lead.phone}](tel:${cleanPhone})\n` +
        `👉 [Click to Email](mailto:${lead.email}?subject=The%20Pink%20Aura%20Consultation)`;

      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramText,
          parse_mode: 'Markdown',
          disable_web_page_preview: true,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('[Telegram Alert Error]', errText);
      } else {
        console.log('[Telegram Alert Sent Successfully] Lead:', lead.name);
      }
    } catch (err) {
      console.error('[Telegram Dispatch Exception]', err);
    }
  }
}
