'use client'
import React, { useEffect, useState } from 'react';

import ProductCard from '@/components/ProductCard';
import { productsSection } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';
import { getProducts } from '@/data/fetches/Products';
import { fetchProductType } from '@/data/types';

const SectionProducts = () => {
  const [productsData, setProductsData] = useState<fetchProductType | null>(null);

  useEffect(() => {
    getProducts({ params: { limit: 8 } })
      .then(res => setProductsData(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <Heading isCenter isMain desc={productsSection.description}>
        {productsSection.heading}
      </Heading>
      {/* <Filter /> */}

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {productsData?.data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="border-neutral-300"
          />
        ))}
      </div>

      <div className="mt-14 flex items-center justify-center">
        <ButtonPrimary>View More</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionProducts;
