'use client';

import React, { useEffect, useState } from 'react';

import Slider from '@/shared/Slider/Slider';
import { getProducts } from '@/data/fetches/Products';
import { fetchProductType } from '@/data/types';
import ProductCard from './ProductCard';

const ProductSlider = () => {
  const [productsData, setProductsData] = useState<fetchProductType | null>(null);
  const SLIDERROWS = 3;

  useEffect(() => {
    getProducts({ params: { limit: 8 } })
      .then(res => setProductsData(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="">
      <Slider
        itemPerRow={SLIDERROWS}
        data={productsData?.data || []} // If data is not available, default to an empty array
        renderItem={(item) => (
          <ProductCard key={item.id} showPrevPrice product={item} className="bg-white" />
        )}
      />
    </div>
  );
};

export default ProductSlider;
