const { createTransporter } = require('../config/email');

// In production, replace with database storage (MongoDB, PostgreSQL, etc.)
const subscribers = new Set();

const handleNewsletterSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    if (subscribers.has(email)) {
      return res.status(200).json({ success: true, message: 'You are already subscribed.' });
    }

    subscribers.add(email);
    console.log(`New newsletter subscriber: ${email} (total: ${subscribers.size})`);

    try {
      const transporter = createTransporter();
      await transporter.sendMail({
        from: `"S.M. Yarns" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Welcome to S.M. Yarns Newsletter',
        html: `<div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:40px;">
          <h2 style="color:#B91C1C;">Thank you for subscribing!</h2>
          <p style="color:#666;line-height:1.7;">You'll receive updates on our latest yarn products, industry insights, and special offers.</p>
          <p style="color:#999;font-size:13px;margin-top:24px;">S.M. Yarns | Ludhiana, Punjab, India</p>
        </div>`,
      });
    } catch (emailError) {
      console.warn('Newsletter confirmation email failed:', emailError.message);
    }

    res.status(200).json({ success: true, message: 'Successfully subscribed to the newsletter.' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  }
};

module.exports = { handleNewsletterSubscription };
