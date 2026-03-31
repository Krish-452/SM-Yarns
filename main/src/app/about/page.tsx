import { Metadata } from 'next';
import AboutContent from './AboutContent';
export const metadata: Metadata = { title: 'About Us', description: 'Learn about S.M. Yarns — a trusted yarn supplier serving textile manufacturers across India since 2017.' };
export default function AboutPage() { return <AboutContent />; }
