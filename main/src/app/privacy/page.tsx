import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'Privacy policy for S.M. Yarns website.' };

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-28 px-6 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-[800px] mx-auto">
        <h1 className="font-display text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-neutral-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p>When you contact us through our website, we collect the information you provide including your name, email address, phone number, company name, and message content. This information is used solely to respond to your inquiry and provide our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <p>We use the collected information to respond to your inquiries, process orders, send relevant product information, and improve our services. We do not sell or share your personal information with third parties except as necessary to fulfill our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at <span className="text-primary-bright">info@smyarns.in</span>.</p>
          </section>
          <p className="text-sm text-neutral-500 pt-4 border-t border-white/5">Last updated: January 2024</p>
        </div>
      </div>
    </div>
  );
}
