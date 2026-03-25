const { createTransporter } = require('../config/email');
const { contactEmailTemplate, autoReplyTemplate } = require('../templates/contactEmail');

const handleContactSubmission = async (req, res) => {
  try {
    const { name, email, phone, company, product, message } = req.body;
    console.log(`New contact inquiry from ${name} (${email})`);

    try {
      const transporter = createTransporter();

      // Notification to admin
      await transporter.sendMail({
        from: `"S.M. Yarns Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'info@smyarns.com',
        cc: process.env.NOTIFICATION_EMAIL,
        subject: `New Inquiry: ${name} - ${product || 'General'}`,
        html: contactEmailTemplate({ name, email, phone, company, product, message }),
        replyTo: email,
      });

      // Auto-reply to customer
      await transporter.sendMail({
        from: `"S.M. Yarns" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Thank you for contacting S.M. Yarns',
        html: autoReplyTemplate({ name }),
      });

      console.log(`  Emails sent for inquiry from ${name}`);
    } catch (emailError) {
      console.warn('  Email sending failed:', emailError.message);
    }

    res.status(200).json({ success: true, message: 'Thank you for your inquiry. We will get back to you shortly.' });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Failed to process your inquiry. Please try again.' });
  }
};

module.exports = { handleContactSubmission };
