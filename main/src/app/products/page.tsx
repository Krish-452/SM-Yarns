import { Metadata } from 'next';
import ProductsContent from './ProductsContent';
export const metadata: Metadata = { title: 'Products', description: 'Explore our complete range of premium yarns — polyester grey, dyed, spandex, PV, PC, nylon, roto, PP, and blended yarns. 1200+ shades available.' };
export default function ProductsPage() { return <ProductsContent />; }
