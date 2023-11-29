import { Inter, Roboto_Mono, Outfit } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});
