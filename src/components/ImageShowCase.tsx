'use client';

// import Image from 'next/image';
// import { pathOr } from 'ramda';
import type { FC } from 'react';
import React from 'react';

import LikeButton from './LikeButton';

interface ImageShowCaseProps {
  image: string;
}

const ImageShowCase: FC<ImageShowCaseProps> = ({ image }) => {
  // const [activeImageIndex, setActiveImageIndex] = useState(0);
 
  return (
    <div className="space-y-3 rounded-2xl border border-neutral-300 p-2">
      <div className="relative overflow-hidden rounded-2xl md:h-[520px]">
        <LikeButton productId='' className="absolute right-5 top-5" />
        <img
          src={image}
          width={500}
          height={500}
          alt={"shoe image test " + image}
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* <div className="grid grid-cols-4 gap-3">
        {image.map((img, index) => (
          <div
            key={img.src}
            className={`${
              activeImageIndex === index ? 'border-2 border-primary' : ''
            } h-[100px] overflow-hidden rounded-lg`}
          >
            <button
              className="h-full w-full"
              type="button"
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={img}
                alt="shoe image"
                className="h-full w-full object-cover object-center"
              />
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageShowCase;
