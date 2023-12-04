import type { Metadata } from 'next';
import './globals.css';
import { outfit } from './fonts';
import Providers from '@/lib/themeProvider';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Techno Club',
  description: 'The official website for Techno Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div id="modal-root"></div>
        <Providers>
          <main className="bg-background">
            <div className="parent-container">
              <Header />
              <div className="">{children}</div>
              <Footer />
            </div>
          </main>
        </Providers>
        <Toaster position='top-right'/>
      </body>
    </html>
  );
}
