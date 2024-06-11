import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

import shoes from '../images/ezgif-1-0fa4ada8fa.jpg';
import hoodie from '../images/orangehoodie.jpg';
import pants from '../images/pants.jpeg';

function Featured() {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="space-y-3">
            <p className="text-primary">Our Collections</p>
            <h1 className="2xl:text-7xl text-3xl font-semibold lg:text-5xl">
              Our Featured Collections
            </h1>
          </div>
          <div className="md:w-[50%] lg:w-[30%]">
            <div className="text-sm text-neutral-500">
              <p>
                Fashion is in the sky, in the street, fashion has to do with
                ideas, the way we live, what is happening. Check out our new
                collection!
              </p>
            </div>
            <div className="flex  cursor-pointer items-center text-primary underline">
              Check out our Collections
              <div className="border-b border-primary pl-2">
                <BsArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:h-[45vh] md:flex-row lg:h-[95vh] 2xl:h-[60vh] 2xl:gap-5">
          <div className="relative md:w-[50%] md:overflow-hidden">
            <div className="absolute left-5 top-5 w-[50%] text-4xl font-semibold 2xl:w-[35%]">
              Hoodie Collection
            </div>
            <span className="absolute bottom-5 right-5 rounded-full bg-black p-4 text-lg text-white">
              <BsArrowUpRight />
            </span>
            <Image
              src={hoodie}
              alt=""
              className="h-full w-full object-cover object-top lg:h-auto"
            />
          </div>
          <div className="flex flex-col gap-5 md:w-[50%] 2xl:gap-5">
            <div className="relative h-1/2 md:overflow-hidden">
              <div className="absolute bottom-5 left-5 w-[50%] text-4xl font-semibold 2xl:w-[35%]">
                Pants Collection
              </div>
              <span className="absolute right-5 top-5 rounded-full bg-black p-4 text-lg text-white">
                <BsArrowUpRight />
              </span>
              <Image
                width={800}
                height={700}
                src={pants}
                alt="featured-image"
                className="h-full w-full object-cover object-bottom"
              />
            </div>
            <div className="relative h-1/2 md:overflow-hidden">
              <div className="absolute bottom-5 right-5 w-[50%] text-4xl font-semibold lg:w-[33%] 2xl:w-[25%]">
                Shoes Collection
              </div>
              <span className="absolute right-5 top-5 rounded-full bg-black p-4 text-lg text-white">
                <BsArrowUpRight />
              </span>
              <Image
                src={shoes}
                alt=""
                className="h-full w-full object-cover object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
