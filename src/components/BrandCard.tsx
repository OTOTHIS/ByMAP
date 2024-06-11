import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { MdStar } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import { Magazin, cleanProductImages } from '@/data/types';

// interface BrandCardProps {
//   name: string;
//   rating: number;
//   reviews: number;
//   followers: number;
//   visitLink: string;
//   image: StaticImageData;
//   products: ProductType[];
// }

const BrandCard: FC<Magazin> = (
  {
  name,
  id,
  // rating,
  // reviews,
  // followers,
  // visitLink,
  image,
  products,
}
) => {
  return (
    <div className="rounded-2xl border border-neutral-300 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-20 w-20 overflow-hidden rounded-lg">
            <Image
            width={100}
            height={100}
            quality={100}

              src={image}
              alt="logo"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-lg font-medium">
              {name} <PiSealCheckFill className="text-blue-600" />
            </h3>
            <div className="flex items-center gap-1">
              <MdStar className="text-yellow-400" />
              <p className="text-sm">
                {4.6}{' '}
                <span className="text-neutral-500">{`(${400} Reviews)`}</span>
              </p>
            </div>
            <p className="text-sm text-neutral-500">{16}M Followers</p>
          </div>
        </div>

        <ButtonSecondary
          className="border-2 border-primary text-primary"
          href={`/magazins/${id}`}
        >
          Visit
        </ButtonSecondary>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="h-[150px] overflow-hidden rounded-lg bg-gray"
          >
            <Image
            width={300}
            height={300}
            quality={100}
            //@ts-ignore
              src={cleanProductImages(product.images)[0]}
              alt="shoe"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCard;
