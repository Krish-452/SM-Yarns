import { Metadata } from 'next';
import ApplicationsContent from './ApplicationsContent';
export const metadata: Metadata = { title: 'Applications', description: 'S.M. Yarns serves hosiery, knitting, weaving, garment, home textile, and industrial textile manufacturers across India.' };
export default function ApplicationsPage() { return <ApplicationsContent />; }
