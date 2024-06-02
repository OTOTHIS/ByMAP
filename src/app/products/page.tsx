"use client"
import React, { useEffect,  useState } from 'react';
import { LuFilter } from 'react-icons/lu';
import { MdOutlineFilterList, MdSearch } from 'react-icons/md';

import ProductCard from '@/components/ProductCard';
import SidebarFilters from '@/components/SideBarFilter';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Input from '@/shared/Input/Input';

import SectionBrands from '../home/SectionBrands';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import { getProducts } from '@/data/fetches/Products';
import {  useSearchParams } from 'next/navigation';
import { fetchProductType } from '@/data/types';
// import dynamic from 'next/dynamic';

// // Dynamically import the SidebarFilters component
// const SidebarFilters = dynamic(() => import('@/components/SideBarFilter'), {
//   loading: () => <p>Loading...</p>, // Optional fallback UI
//   ssr: true // Set to true if you want to enable server-side rendering
// });




const page =  () => {


  const searchParams = useSearchParams()
 const price =  searchParams.get("rangePrices");
 const category = searchParams.get("activeCategoy")
 const magazin = searchParams.get("activeMagazin");



  const [product, setProduct] = useState<fetchProductType | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({
          params: {
            limit: 10,
            customPrice:price,
            category,
            magazin
          }
        });
        setProduct(response);
        console.log('Fetched products:', response);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
    

    console.log('Query parameters:', price);
  }, [price ,category , magazin ]); // Depend on the query directly


  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters  />
        </div>        
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
            <div className="flex flex-1 items-center gap-2 rounded-full border border-neutral-300 px-4">
              <MdSearch className="text-2xl text-neutral-500" />
              <Input
                type="password"
                rounded="rounded-full"
                placeholder="Search..."
                sizeClass="h-12 px-0 py-3"
                className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-5">
              <ButtonSecondary className="flex items-center gap-1 bg-gray">
                <LuFilter />
                Filters
              </ButtonSecondary>
              <ButtonSecondary className="flex items-center gap-2 bg-gray">
                Most popular
                <MdOutlineFilterList />
              </ButtonSecondary>
            </div>
          </div>
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
  {product?.data && product.data.length > 0 ? (
    product.data.map((item, index) => (
      <ProductCard showPrevPrice product={item} key={index} />
    ))
  ) : (
    <div className="col-span-full text-center text-gray-500">
      No products available
    </div>
  )}
</div>
          <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
        </div>
      </div>

      <div className="my-24">
        <SectionBrands />
      </div>
    </div>
  );
};

export default page;
