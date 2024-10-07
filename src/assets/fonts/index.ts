import { Asap, Inter, Plus_Jakarta_Sans, Nunito } from 'next/font/google';

export const asap = Asap({
  variable: '--font-asap',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '600', '700', '800', '900'],
});
