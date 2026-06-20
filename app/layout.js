import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://naveen-dudhyal.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Naveen Dudhyal · Senior Full-Stack Engineer · React, Next.js, AWS, Azure, CI/CD',
    template: '%s · Naveen Dudhyal',
  },
  description:
    'Senior Full-Stack Engineer with 5+ years building production web platforms with React, Next.js, Node.js, TypeScript, AWS, Azure, headless CMS and CI/CD. Available worldwide for freelance and contract work.',
  keywords: [
    'Naveen Dudhyal',
    'Full-Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'TypeScript',
    'AWS',
    'Azure',
    'DevOps',
    'CI/CD',
    'Headless CMS',
    'Strapi',
    'Sanity',
    'Contentful',
    'Freelance Developer',
    'Remote Engineer',
    'Hire Developer',
  ],
  authors: [{ name: 'Naveen Dudhyal' }],
  creator: 'Naveen Dudhyal',
  publisher: 'Naveen Dudhyal',
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Naveen Dudhyal · Senior Full-Stack Engineer',
    description:
      'Building secure, lightning-fast web platforms with React, Next.js, AWS & Azure. Available worldwide.',
    siteName: 'Naveen Dudhyal',
    locale: 'en_US',
    images: [{ url: '/assets/my-avatar-1.webp', width: 1200, height: 630, alt: 'Naveen Dudhyal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naveen Dudhyal · Senior Full-Stack Engineer',
    description:
      'Building secure, lightning-fast web platforms with React, Next.js, AWS & Azure. Available worldwide.',
    images: ['/assets/my-avatar-1.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
};

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Naveen Dudhyal',
  jobTitle: 'Senior Full-Stack Engineer',
  url: SITE_URL,
  sameAs: [
    'https://www.linkedin.com/in/naveen-dudhyal-ba122a22a',
    'https://github.com/NaveenD22',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'AWS',
    'Microsoft Azure',
    'CI/CD',
    'DevOps',
    'Headless CMS',
    'Strapi',
    'Sanity',
    'Contentful',
    'Docker',
    'Kubernetes',
    'Terraform',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressCountry: 'IN',
  },
  email: 'mailto:dinaveen4018@gmail.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-white antialiased selection:bg-fuchsia-500/40 font-sans">
        {children}
      </body>
    </html>
  );
}
