import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { reviews } from '../data/content';

function Reviews() {
  return (
    <div className="container-custom">
      <div className="flex flex-col gap-20 text-white">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="space-y-3">
            <p className="text-primary">Our Testimonies</p>
            <h1 className="2xl:text-7xl text-3xl font-semibold md:w-[70%] lg:w-[60%] lg:text-5xl">
              Our Satisfied Customer Reviews
            </h1>
          </div>
          <div className="md:w-[50%] lg:w-[30%]">
            <div className="text-sm text-gray-500">
              <p>
                Fashion is in the sky, in the street, fashion has to do with
                ideas, the way we live, what is happening
              </p>
            </div>
            <div className="flex  cursor-pointer items-center text-primary underline">
              Learn More
              <div className="border-b border-primary pl-2">
                <BsArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:mt-10 md:grid-cols-2 lg:gap-20">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="relative space-y-10 pt-10 md:pl-12"
            >
              <span className="absolute left-0 top-0 z-0 rounded-full border-[#6c757d] bg-[#6c757d]/50 p-8 text-5xl text-white">
                <ImQuotesLeft />
              </span>
              <div className="text-2xl font-medium lg:text-4xl">
                {review.review}
              </div>
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 overflow-hidden rounded-full lg:h-16 lg:w-16">
                  <Image
                    width={300}
                    height={300}
                    src={review.profile}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 text-sm lg:text-base">
                  <p>{review.name}</p>
                  <p className="text-[#6c757d]">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-end gap-10">
          <div className="cursor-pointer rounded-full bg-[#6c757d] p-5 text-3xl text-white hover:bg-white hover:text-black">
            <MdKeyboardArrowLeft />
          </div>
          <div className="cursor-pointer rounded-full bg-[#6c757d] p-5 text-3xl text-white hover:bg-white hover:text-black">
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
