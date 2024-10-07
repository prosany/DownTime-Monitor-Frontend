import React from 'react';

interface AuthSystemLayoutProps {
  children: React.ReactNode;
}

const AuthSystemLayout = ({ children }: AuthSystemLayoutProps) => {
  return (
    <main className='min-w-10/12 max-w-[1100px] mx-auto min-h-full p-5 flex flex-col justify-center items-center'>
      {children}
    </main>
  );
};

export default AuthSystemLayout;
