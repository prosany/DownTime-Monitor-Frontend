import { cn } from '@/utils/tailwindMerge';
import React from 'react';

interface HeaderProps {
  className?: string;
  logoClassName?: string;
  sloganClassName?: string;
}

const Header = ({ className, logoClassName, sloganClassName }: HeaderProps) => {
  return (
    <header className={cn('font-nunito', className)}>
      <div>
        <div className='flex items-center'>
          <svg
            className={cn('w-7 h-7 mr-2', logoClassName)}
            data-slot='icon'
            fill='none'
            stroke-width='1.5'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5'
            ></path>
          </svg>
          <h1 className={cn('text-xl font-extrabold', logoClassName)}>
            DownTime Monitor
          </h1>
        </div>
        <p className={cn('text-xs -mt-1', sloganClassName)}>
          Seamless API Monitoring for Uninterrupted Service!
        </p>
      </div>
    </header>
  );
};

export default Header;
