import { Metadata } from 'next';
import LogisticsContent from './LogisticsContent';

export const metadata: Metadata = { 
  title: 'Logistics & Delivery', 
  description: 'Pan-India yarn delivery network. S.M. Yarns delivers to all major textile hubs — Ludhiana, Mumbai, Tirupur, and more.',
  alternates: {
    canonical: '/logistics',
  },
};

export default function LogisticsPage() { 
  return <LogisticsContent />; 
}
