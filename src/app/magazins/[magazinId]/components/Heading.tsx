import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

import header from '../images/ezgif-1-0fa4ada8fa.jpg';
import image from '../images/logo.png';
import { headerSection, logoLinks } from '../data/content';

function Heading() {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex flex-col gap-14 md:w-[50%]">
          <div className="flex items-center">
            <Image src={image} alt="png" className="w-20 2xl:w-24" />
            <div className="-ml-4 text-lg leading-5 2xl:-ml-6">
              <p>New Summer 2023</p>
              <p>Collections</p>
            </div>
          </div>
          <div className="space-y-5">
            <div
              className="text-4xl font-semibold lg:text-6xl"
              style={{ lineHeight: '1em' }}
            >
              {headerSection.heading}
              <span className="text-primary"> {headerSection.spanText}</span>
            </div>
            <div className="flex items-end gap-5">
              <div className="w-[70%] font-medium text-neutral-500">
                {headerSection.description}
              </div>
              <div className="">
                <div className="rounded-full bg-black p-4 text-lg text-white">
                  <BsArrowUpRight />
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold">Our brand partners</p>
              <div className="flex items-center justify-between">
                {logoLinks.map((logo) => (
                  <div key={logo.src} className="w-[20%]">
                    <Image
                      src={logo}
                      alt="logo"
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[50vh] justify-end rounded-md md:w-[45%] lg:h-[650px]">
          <Image
            src={header}
            alt=""
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Heading;
