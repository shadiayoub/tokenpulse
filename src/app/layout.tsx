import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TokenPulse - Web3 Infrastructure Platform',
  description: 'Next-generation Web3 infrastructure platform with NFT-based resource ownership and revenue sharing',
  keywords: 'Web3, infrastructure, NFTs, blockchain, decentralized, cloud computing, revenue sharing',
  authors: [{ name: 'TokenPulse Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'TokenPulse - Web3 Infrastructure Platform',
    description: 'Next-generation Web3 infrastructure platform with NFT-based resource ownership and revenue sharing',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TokenPulse - Web3 Infrastructure Platform',
    description: 'Next-generation Web3 infrastructure platform with NFT-based resource ownership and revenue sharing',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
