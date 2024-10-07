import { asap, inter, nunito, plusJakartaSans } from '@/assets/fonts';
import type { Metadata } from 'next';
import '@/styles/core.scss';
import AuthSystemLayout from '@/layouts/AuthSystemLayout';
import Header from '@/components/elements/header/Header';

export const metadata: Metadata = {
  title: 'Next.js TailwindCSS Starter',
  description: 'Next.js TailwindCSS Starter',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${asap.variable} ${inter.variable} ${plusJakartaSans.variable} ${nunito.variable} font-asap bg-dark-700 h-svh`}
      >
        <AuthSystemLayout>
          <Header
            className='flex justify-center mb-6'
            logoClassName='text-white'
            sloganClassName='text-gray-200'
          />
          <div className='shadow w-[420px] p-6 rounded-lg bg-dark-900'>
            {children}
          </div>
        </AuthSystemLayout>
      </body>
    </html>
  );
}
