import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

import { collections } from '../data/content';

function Collections() {
  return (
    <div className="container-custom">
      <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="md:w-[33%]" />
        <div className="left-0 md:absolute md:w-1/3">
          <p className="font-medium text-primary 2xl:text-xl">
            New Collections
          </p>
          <div
            className="2xl:text-7xl my-5 text-4xl font-semibold lg:text-6xl"
            style={{ lineHeight: '1em' }}
          >
            <h1>Sweatshirt</h1>
            <h1 className="md:ml-10 lg:ml-20 2xl:ml-32 ">Collections</h1>
          </div>
          <div className="text-sm text-neutral-500 md:w-[90%] lg:w-[70%]">
            <p>
              Fashion is in the sky, in the street, fashion has to do with
              ideas, the way we live, what is happening.
            </p>
            <p>Check out our new collection!</p>
          </div>
          <div className="mt-16 flex items-end justify-between md:justify-normal 2xl:gap-20">
            <p className="w-[60%] lg:w-[40%] 2xl:w-[30%]">
              See more photos for this arrival
            </p>
            <div className="cursor-pointer rounded-full bg-black p-3 text-lg text-white">
              <BsArrowUpRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:-ml-20 md:w-[70%] md:flex-row md:items-start md:justify-between md:gap-0">
          {collections.map((collection) => (
            <div className="space-y-4 md:w-[48%]" key={collection.name}>
              <div className="h-[45vh] overflow-hidden md:h-[35vh] lg:h-[450px]">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex items-end justify-between">
                <p className="w-[70%] text-base md:text-xl">
                  {collection.name}
                </p>
                <div className="cursor-pointer rounded-full border border-black p-3  text-lg hover:bg-black hover:text-primary">
                  <BsArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
