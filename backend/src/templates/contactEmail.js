function contactEmailTemplate({ name, email, phone, company, product, message }) {
  const row = (label, value) => value ? `
    <tr><td style="padding:12px 0;border-bottom:1px solid #eee;">
      <strong style="color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px;">${label}</strong>
      <div style="color:#333;font-size:16px;margin-top:4px;">${value}</div>
    </td></tr>` : '';

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#fff;">
    <tr><td style="background:#0A0A0A;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#DC2626;font-size:28px;font-weight:800;">SM <span style="color:#fff;">YARNS</span></h1>
    </td></tr>
    <tr><td style="background:#B91C1C;padding:20px 40px;">
      <h2 style="margin:0;color:#fff;font-size:18px;font-weight:600;">New Contact Form Inquiry</h2>
    </td></tr>
    <tr><td style="padding:32px 40px;"><table width="100%" cellpadding="0" cellspacing="0">
      ${row('Name', name)}
      ${row('Email', `<a href="mailto:${email}" style="color:#B91C1C;text-decoration:none;">${email}</a>`)}
      ${row('Phone', phone)}
      ${row('Company', company)}
      ${row('Product Interest', product)}
      ${message ? `<tr><td style="padding:12px 0;">
        <strong style="color:#666;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</strong>
        <div style="color:#333;font-size:15px;margin-top:8px;line-height:1.6;background:#f9f9f9;padding:16px;border-radius:8px;">${message.replace(/\n/g, '<br>')}</div>
      </td></tr>` : ''}
    </table></td></tr>
    <tr><td style="background:#f5f5f5;padding:20px 40px;text-align:center;">
      <p style="margin:0;color:#999;font-size:12px;">Submitted via S.M. Yarns website contact form.</p>
    </td></tr>
  </table>
</body></html>`;
}

function autoReplyTemplate({ name }) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#fff;">
    <tr><td style="background:#0A0A0A;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#DC2626;font-size:28px;font-weight:800;">SM <span style="color:#fff;">YARNS</span></h1>
    </td></tr>
    <tr><td style="padding:40px;">
      <h2 style="color:#333;margin:0 0 16px;">Thank you, ${name}!</h2>
      <p style="color:#666;font-size:15px;line-height:1.7;">We have received your inquiry and our team will get back to you within 24 hours.</p>
      <p style="color:#666;font-size:15px;line-height:1.7;">If your requirement is urgent, feel free to reach us directly at our phone number.</p>
      <p style="color:#666;font-size:15px;line-height:1.7;margin-top:24px;">Best regards,<br><strong style="color:#333;">S.M. Yarns Team</strong></p>
    </td></tr>
    <tr><td style="background:#f5f5f5;padding:20px 40px;text-align:center;">
      <p style="margin:0;color:#999;font-size:12px;">S.M. Yarns | Surat, Gujarat, India</p>
    </td></tr>
  </table>
</body></html>`;
}

module.exports = { contactEmailTemplate, autoReplyTemplate };
