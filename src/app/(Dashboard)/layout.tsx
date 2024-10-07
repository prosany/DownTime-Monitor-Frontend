import { asap, inter, nunito, plusJakartaSans } from '@/assets/fonts';
import type { Metadata } from 'next';
import '@/styles/core.scss';

export const metadata: Metadata = {
  title: 'Next.js TailwindCSS Starter',
  description: 'Next.js TailwindCSS Starter',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${asap.variable} ${inter.variable} ${plusJakartaSans.variable} ${nunito.variable} font-asap bg-dark-700`}
      >
        {children}
      </body>
    </html>
  );
}
