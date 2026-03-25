import { StaticImageData } from 'next/image';
import imgNylon from '@/components/yarn_icon/Nylon Yarn.jpeg';
import imgPP from '@/components/yarn_icon/PP Yarn.jpeg';
import imgBlended from '@/components/yarn_icon/Polyester & Blended Yarns.jpeg';
import imgPC from '@/components/yarn_icon/Polyester Cotton (PC) Yarn.jpeg';
import imgDyed from '@/components/yarn_icon/Polyester Dyed Yarn.jpeg';
import imgGrey from '@/components/yarn_icon/Polyester Grey Yarn.jpeg';
import imgPV from '@/components/yarn_icon/Polyester Viscose (PV) Yarn.jpeg';
import imgRoto from '@/components/yarn_icon/Roto Yarn.jpeg';
import imgSpandex from '@/components/yarn_icon/Spandex Elastane Yarn.jpeg';

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  details: string;
  color: string;
  image: StaticImageData;
  applications: string[];
  denierRange: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Polyester Grey Yarn',
    slug: 'polyester-grey',
    description:
      'High-tenacity grey yarn for diverse textile applications with consistent denier and excellent uniformity.',
    details:
      'Our Polyester Grey Yarn is manufactured from premium-grade polyester chips, offering exceptional tensile strength and consistent denier variation. Ideal for downstream dyeing processes and available in a wide range of specifications to suit warp, weft, and knitting applications.',
    color: '#8B8B8B',
    image: imgGrey,
    applications: ['Weaving', 'Knitting', 'Dyeing Units'],
    denierRange: '30D – 600D',
  },
  {
    id: 2,
    name: 'Polyester Dyed Yarn',
    slug: 'polyester-dyed',
    description:
      'Dope dyed & cone dyed variants in 1200+ shades with superior color fastness and UV resistance.',
    details:
      'Available in both dope-dyed and cone-dyed variants. Our dyed yarns offer superior color fastness (Grade 4-5), UV resistance, and batch-to-batch consistency. Over 1200 shades in stock with custom shade matching available on request.',
    color: '#C41E3A',
    image: imgDyed,
    applications: ['Hosiery', 'Knitting', 'Garment Production'],
    denierRange: '50D – 300D',
  },
  {
    id: 3,
    name: 'Spandex / Elastane Yarn',
    slug: 'spandex-elastane',
    description:
      'Premium stretch yarns for hosiery and activewear with exceptional recovery and durability.',
    details:
      'High-performance spandex yarns with excellent elongation (450-700%) and recovery properties. Suitable for intimate wear, activewear, hosiery, and stretch fabric production. Available in clear and colored variants.',
    color: '#E8D5B7',
    image: imgSpandex,
    applications: ['Hosiery', 'Activewear', 'Intimate Wear'],
    denierRange: '20D – 70D',
  },
  {
    id: 4,
    name: 'Polyester Viscose (PV) Yarn',
    slug: 'pv-yarn',
    description:
      'Polyester-Viscose blended yarns combining strength with natural softness for premium fabrics.',
    details:
      'Our PV blended yarns combine the strength and wrinkle resistance of polyester with the soft hand-feel and drape of viscose. Available in multiple blend ratios (65/35, 52/48, 80/20) to suit your specific fabric requirements for suiting and shirting.',
    color: '#6B4E71',
    image: imgPV,
    applications: ['Suiting', 'Shirting', 'Dress Material'],
    denierRange: '30s – 80s Count',
  },
  {
    id: 5,
    name: 'Polyester Cotton (PC) Yarn',
    slug: 'pc-yarn',
    description:
      'Polyester-Cotton blends offering the best of both fibers for comfortable, durable textiles.',
    details:
      'Poly-Cotton blended yarns that deliver excellent comfort, moisture management, and durability. Available in various blend ratios (52/48, 65/35, 80/20) for diverse textile applications including shirting, uniform fabrics, and home textiles.',
    color: '#4A7C59',
    image: imgPC,
    applications: ['Shirting', 'Uniform Fabric', 'Home Textiles'],
    denierRange: '20s – 60s Count',
  },
  {
    id: 6,
    name: 'Nylon Yarn',
    slug: 'nylon',
    description:
      'High-strength nylon yarns for industrial and fashion applications requiring exceptional abrasion resistance.',
    details:
      'Premium nylon 6 and nylon 66 yarns offering unmatched abrasion resistance, high tenacity, and excellent elasticity. Perfect for hosiery, swimwear, parachute fabric, and industrial applications requiring superior mechanical properties.',
    color: '#2C5F7C',
    image: imgNylon,
    applications: ['Hosiery', 'Swimwear', 'Industrial Textiles'],
    denierRange: '15D – 210D',
  },
  {
    id: 7,
    name: 'Roto Yarn',
    slug: 'roto-yarn',
    description:
      'Specialized roto-spun yarns for unique textile applications with distinctive texture profiles.',
    details:
      'Roto-spun yarns offering a unique texture and hand-feel distinct from ring-spun and open-end yarns. Cost-effective solution for specific textile applications requiring bulk, coverage, and distinctive surface characteristics.',
    color: '#B8860B',
    image: imgRoto,
    applications: ['Home Textiles', 'Industrial Fabrics', 'Carpet Backing'],
    denierRange: '100D – 500D',
  },
  {
    id: 8,
    name: 'PP Yarn',
    slug: 'pp-yarn',
    description:
      'Polypropylene yarns for industrial textiles, packaging, and specialty applications.',
    details:
      'Lightweight, chemically resistant polypropylene yarns for industrial applications. Excellent moisture wicking, low specific gravity, and high chemical resistance make them ideal for geo-textiles, filter fabrics, packaging, and rope manufacturing.',
    color: '#556B2F',
    image: imgPP,
    applications: ['Packaging', 'Geo-textiles', 'Filter Fabrics'],
    denierRange: '100D – 3000D',
  },
  {
    id: 9,
    name: 'Polyester & Blended Yarns',
    slug: 'blended-yarns',
    description:
      'Custom polyester blends engineered to meet specific manufacturing requirements.',
    details:
      'Custom blended yarns designed to your exact specifications. We work closely with you to develop the perfect blend ratio, count, and finish to meet your unique fabric requirements. Ideal for specialty and technical textile applications.',
    color: '#8B4513',
    image: imgBlended,
    applications: ['Custom Applications', 'Specialty Fabrics', 'Technical Textiles'],
    denierRange: 'Custom',
  },
];
