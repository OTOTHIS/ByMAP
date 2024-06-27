'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React, { useState } from 'react';

import LikeButton from './LikeButton';

interface ImageShowCaseProps {
  shots: string[];
  productId:string
}

const ImageShowCase: FC<ImageShowCaseProps> = ({ shots }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Function to remove backslashes from URLs
  // const cleanUrl = (url: string) => url.replace(/\\/g, '');
 
  return (
    <div className="space-y-3 rounded-2xl border border-neutral-300 p-2">
      <div className="relative overflow-hidden rounded-2xl md:h-[520px]">
        <LikeButton productId="" className="absolute right-5 top-5" />
        <Image
          width={500}
          height={500}
          src={shots[activeImageIndex]??'test'}
          alt="shoe image"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {shots.map((shot, index) => (
          <div
            key={index}
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
                height={200}
                width={200}
                src={shot}
                alt="shoe image"
                className="h-full w-full object-cover object-center"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageShowCase;
