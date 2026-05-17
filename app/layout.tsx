import type { Metadata } from 'next';
import { IBM_Plex_Mono, Instrument_Serif, DM_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Siva Subramanian - Proof-of-Work Ledger',
  description:
    'Operator-builder documenting AI systems built against real business problems.',
  openGraph: {
    title: 'Siva Subramanian - Proof-of-Work Ledger',
    description: 'Real operating problems, shipped AI systems, documented learning.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body>
        <div className="texture-strip" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
