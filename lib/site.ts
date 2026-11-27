import { CLINIC_INFO } from '@/data/services';

export const SITE_URL = 'https://www.thepinkaura.co.in';
export const SITE_NAME = 'The Pink Aura';
export const OG_IMAGE = '/og-image.jpg';

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

/** Site-wide LocalBusiness / MedicalBusiness structured data. */
export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'BeautySalon'],
  '@id': `${SITE_URL}/#clinic`,
  name: CLINIC_INFO.name,
  alternateName: SITE_NAME,
  slogan: CLINIC_INFO.tagline,
  url: SITE_URL,
  logo: absoluteUrl('/images/logo/Logo%20the%20pink%20aura.webp'),
  image: absoluteUrl(OG_IMAGE),
  telephone: '+91-7619151455',
  email: CLINIC_INFO.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#112, 1st Floor, 16th Cross, Near Delmia Circle, 4th Phase JP Nagar, Dollars Colony',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560078',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 12.9058333, longitude: 77.5951944 },
  hasMap: 'https://maps.google.com/?q=12.9058333,77.5951944',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  areaServed: ['JP Nagar', 'Jayanagar', 'Banashankari', 'BTM Layout', 'Bannerghatta Road', 'Bengaluru'],
  sameAs: [CLINIC_INFO.instagram.split('?')[0]],
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
