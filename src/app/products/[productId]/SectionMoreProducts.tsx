import React from 'react';

import ProductCard from '@/components/ProductCard';
import Heading from '@/shared/Heading/Heading';
import { getProducts } from '@/data/fetches/Products';
import { ProductType } from '@/data/types';

const SectionMoreProducts = async () => {
  const products = await getProducts({params:'test'});
  return (
    <div>
      <Heading className="mb-0">Explore more products</Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {products?.data.map((shoe:ProductType , index:number) => (
          <ProductCard
            key={index}
            product={shoe}
            className="border-neutral-300"
          />
        ))}
      </div>
    </div>
  );
};

export default SectionMoreProducts;
