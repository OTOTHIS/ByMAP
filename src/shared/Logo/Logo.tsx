import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { RiMicrosoftLoopFill } from 'react-icons/ri';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'hidden' }) => {
  return (
    <Link className="flex cursor-pointer items-center gap-2" href="/">
      <Image src="/assets/images/logobymap.png" className='mt-3' width={100} height={100} alt="bymap logo" />      
      
      <span className={`${className} text-2xl font-bold`}>HotKicks.</span>
    </Link>
  );
};

export default Logo;
