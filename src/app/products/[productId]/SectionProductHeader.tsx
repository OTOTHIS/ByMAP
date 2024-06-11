"use client";

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
import ImageShowCase from '@/components/ImageShowCase';
import { CartType, cleanProductImages } from '@/data/types';

interface SectionProductHeaderProps {
  images: string;
  shoeName: string;
  prevPrice: number;
  currentPrice: number;
  rating: number;
  pieces_sold: number;
  reviews: number;
  productId: string;
}

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  images,
  shoeName,
  prevPrice,
  currentPrice,
  rating,
  pieces_sold,
  reviews,
  productId
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const { addToCartApi } = useCart(); // @ts-ignore
  const router = useRouter();
  //@ts-ignore
  const { userApi } = useCart(); // Assuming this gives you access to the user state

  useEffect(() => {
    const cartData: CartType = JSON.parse(localStorage.getItem('cart') || '[]');
    const productInCart = cartData.cart_items?.find((item) => item.product.id == Number(productId));
    if (productInCart) {
      setIsAdded(true);
    }
  }, [productId]);

  const handleAddToCart = () => {
    // if (userApi) {
    //   // User is authenticated, proceed to add to cart
     
    // } else {
    //   // User is not authenticated, redirect to login
    //   router.push(`/login?redirect=/products/${productId}`);
    // }
    addToCartApi(productId);
  };

  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[50%]">
        <ImageShowCase productId={productId} shots={cleanProductImages(images)} />
      </div>
      <div className="basis-[45%]">
        <Heading className="mb-0" isMain title="new arrival!">
          {shoeName}
        </Heading>
        <div className="mb-10 flex items-center">
          <div className="flex items-center gap-1">
            <ButtonCircle3 className="overflow-hidden border border-neutral-400" size="w-11 h-11">
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
              {rating} <span className="text-neutral-500">{`(${reviews} Reviews)`}</span>
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
            onClick={handleAddToCart}
            className="flex w-full items-center gap-1 border-2 border-primary text-primary"
            disabled={isAdded}
          >
            <BsBag /> {isAdded ? 'Ajouté' : 'Ajouter au panier'}
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
