"use client"

import Image from 'next/image';
import type { FC } from 'react';
import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { LuInfo } from 'react-icons/lu';
import { MdStar } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

import ShoeSizeButton from '@/components/ShoeSizeButton';
import { shoeSizes } from '@/data/content';
import nike_profile from '@/images/nike_profile.jpg';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Heading from '@/shared/Heading/Heading';
import { useCart } from '@/context/cartContext';
import LikeButton from '@/components/LikeButton';

interface SectionProductHeaderProps {
  image: string;
  shoeName: string;
  prevPrice: number;
  currentPrice: number;
  rating: number;
  pieces_sold: number;
  reviews: number;
  productId:string
}

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  image,
  shoeName,
  prevPrice,
  currentPrice,
  rating,
  pieces_sold,
  reviews,
  productId
}) => {

  const [isAdded] = useState(false);
  const [isDisabled] = useState(false);
  //@ts-ignore
  const {addToCartApi} = useCart()
  
  // const handleClick = async (id:string) => {
  //   // try {
  //   //   await axiosClient.post('/user/carts', { product_id : id });
  //   //   setIsAdded(true);
  //   //   setIsDisabled(true);
  //   //   router.push(`/products/${id}?status=added${id}`)

  //   // } catch (error) {
  //   //   router.push('/login')
  //   //   console.error('Error adding to cart:', error);
  //   //   // Handle error appropriately
  //   // }
  // };


  return (

    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[50%]">
        {/* <ImageShowCase image={image} /> */}

        <div className="space-y-3 rounded-2xl border border-neutral-300 p-2">
      <div className="relative overflow-hidden rounded-2xl md:h-[520px]">
        <LikeButton productId={productId}  className="absolute right-5 top-5" />
        <img
          src={image}
          width={500}
          height={500}
          alt={"shoe image test " + image}
          className="h-full w-full object-cover object-center"
        />
      </div>
  
    </div>


      </div>




   






      <div className="basis-[45%]">
        <Heading className="mb-0" isMain title="new arrival!">
          {shoeName}
        </Heading>

        <div className="mb-10 flex items-center">
          <div className="flex items-center gap-1">
            <ButtonCircle3
              className="overflow-hidden border border-neutral-400"
              size="w-11 h-11"
            >
              <Image
              width={400}
              height={400}
              quality={100}
                src={nike_profile}
                alt="nike_profile"
                className="h-full w-full object-cover"
              />
            </ButtonCircle3>
            <span className="font-medium">Nike</span>
            <PiSealCheckFill className="text-blue-600" />
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <div className="flex items-center gap-1">
            <MdStar className="text-yellow-400" />
            <p className="text-sm">
              {rating}{' '}
              <span className="text-neutral-500">{`(${reviews} Reviews)`}</span>
            </p>
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <p className="text-neutral-500">{`${pieces_sold} items sold`}</p>
        </div>

        <div className="mb-5 space-y-1">
          <p className="text-neutral-500 line-through">${prevPrice}</p>
          <h1 className="text-3xl font-medium">${currentPrice}</h1>
        </div>

        <div className="mb-5 flex items-end justify-between">
          <p className="text-xl">Available sizes</p>
          <p className="flex items-center gap-1 text-sm text-neutral-500">
            Size guide <LuInfo />
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {shoeSizes.map((size) => (
            <ShoeSizeButton key={size} size={size} />
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5">
          <ButtonPrimary className="w-full">Buy Now</ButtonPrimary>
          <ButtonSecondary
      onClick={() => addToCartApi(productId)}
      className="flex w-full items-center gap-1 border-2 border-primary text-primary"
      disabled={isDisabled}
    >
      <BsBag /> {isAdded ? 'Added' : 'Add to cart'}
    </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
