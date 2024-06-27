import Logo from '@/shared/Logo/Logo';
import Link from 'next/link';
import { MdCopyright } from 'react-icons/md';
import { aboutSectionDescription } from '../data/content';
import { NavLinks } from '@/data/content';



function FooterComp() {
  return (
    <div className="container-custom pt-20">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="space-y-3">
            <div className="2xl:text-7xl text-3xl font-semibold md:w-[70%] lg:w-[60%] lg:text-5xl">
              <Logo />
            </div>
          </div>
          <div className="md:w-[50%] lg:w-[30%]">
            <div className="text-sm text-neutral-500">
              <p>{aboutSectionDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-b border-neutral-300 pb-6 md:text-2xl 2xl:text-3xl">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between py-5 text-xs text-neutral-500 md:text-sm lg:text-base">
        <div className="flex items-center">
          Copyright{' '}
          <span>
            <MdCopyright />
          </span>{' '}
          2023. All rights reserved by{' '}
          <a href="https://devspherelabs.com/" className="ml-1 underline">
            DevsphereLabs
          </a>
          .
        </div>
        <div className="hidden items-center gap-16 md:flex">
          <p>Privacy Policy</p>
          <p>Shipping Policy</p>
        </div>
      </div>
    </div>
  );
}

export default FooterComp;
