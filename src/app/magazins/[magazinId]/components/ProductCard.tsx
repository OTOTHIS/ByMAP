import { ProductType, cleanProductImages } from '@/data/types';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { BsPlus } from 'react-icons/bs';



const ProductCard: FC<ProductType> = (product:ProductType) => {
  //@ts-ignore
  // const {addToCartApi} = useCart()

  return (
    <div className="space-y-4" key={product.id}>
      <div className="relative h-[40vh] overflow-hidden md:h-[30vh] lg:h-[400px]">
        <div className="absolute bottom-5 right-5">
          <div className="cursor-pointer rounded-full bg-black p-3 text-lg text-white">
            <BsPlus 
            // onClick={() => addToCartApi(product.id.toString())}
             className="text-xl" />
          </div>
        </div>
       <Link href={`/products/${product.id}`}>
       <Image
          src={cleanProductImages(product.images)[0]}
          alt={product.title}
          width={300}
          height={300}
          className="h-full w-full object-cover object-top"
        />
       </Link> 
      </div>
      <div className="flex items-end justify-between">
        <div className="w-[70%] text-base lg:text-lg">
          <p className="text-neutral-600">{product.category.name}</p>
          <p className="font-semibold">{product.title}</p>
        </div>
        <p className="text-5xl font-semibold text-primary md:text-3xl lg:text-3xl">
          {product.price} MAD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
