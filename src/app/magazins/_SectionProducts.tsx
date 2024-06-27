'use client'
import React, { useEffect, useState } from 'react';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';
import { midText } from '../preview-page-sections/content';
import { axiosClient } from '@/components/axios/axios';
import { PaginatedMagazins } from '@/data/types';
import BrandCard from '@/components/BrandCard';

const SectionProducts = () => {

  const [magazin, setMagazin] = useState<PaginatedMagazins>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const response = await axiosClient.get('/public/magazinas?paginate=9')
        setMagazin(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
    

  }, []); 


  return (
    <div className="container">
      <Heading  className="pb-16">
        {midText
        }
      </Heading>

      <div className="space-y-10">
        <div className="items-center justify-between md:flex">
          <Heading isMain className="mb-0">
            Nouveau Produits
          </Heading>
          <ButtonPrimary href="/products">Acheter Maintent</ButtonPrimary>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {magazin?.data.map((brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </div>

        <div className="mt-16 h-px w-full bg-neutral-300" />
      </div>
    </div>
  );
};

export default SectionProducts;
