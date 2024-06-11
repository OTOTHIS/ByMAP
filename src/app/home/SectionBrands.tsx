'use client'
import React, { useEffect, useState } from 'react';

import BrandCard from '@/components/BrandCard';
import { brandsSection } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';
import { PaginatedMagazins } from '@/data/types';
import { axiosClient } from '@/components/axios/axios';

const SectionBrands = () => {

  const [magazin, setMagazin] = useState<PaginatedMagazins>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
      
        const response = await axiosClient.get('/public/magazinas')
        setMagazin(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
    

  }, []); 


  return (
    <div className="container">
      <Heading desc={brandsSection.description} isCenter isMain>
        {brandsSection.heading} 
      </Heading>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {magazin?.data.map((brand) => (
          <BrandCard key={brand.id} {...brand} />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionBrands;
