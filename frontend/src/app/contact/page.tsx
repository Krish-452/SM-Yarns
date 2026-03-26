import { Metadata } from 'next';
import ContactContent from './ContactContent';
export const metadata: Metadata = { title: 'Contact Us', description: 'Get in touch with S.M. Yarns for competitive quotes on premium yarn products. Phone, email, or visit us in Ludhiana, Punjab.' };
export default function ContactPage() { return <ContactContent />; }
