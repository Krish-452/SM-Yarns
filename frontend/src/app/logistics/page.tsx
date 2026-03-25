import { Metadata } from 'next';
import LogisticsContent from './LogisticsContent';
export const metadata: Metadata = { title: 'Logistics & Delivery', description: 'Pan-India yarn delivery network. S.M. Yarns delivers to all major textile hubs — Surat, Mumbai, Ludhiana, Tirupur, and more.' };
export default function LogisticsPage() { return <LogisticsContent />; }
