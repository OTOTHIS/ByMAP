import { pathOr } from 'ramda';
import React from 'react';

import SectionMoreProducts from './SectionMoreProducts';
import SectionNavigation from './SectionNavigation';
import SectionProductHeader from './SectionProductHeader';
import SectionProductInfo from './SectionProductInfo';
import { axiosClient } from '@/components/axios/axios';
import { ProductType } from '@/data/types';

// interface ProductProps {
//   product: ProductType;
// }

//@ts-ignore
const getProduct = async (id: string): Promise<ProductType | undefined> => {
  try {
    const response = await axiosClient.get(`/public/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
};

const SingleProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;
  const product = await getProduct(productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <SectionNavigation />
{/* 
      <div className="mb-20">
        <SectionProductHeader
          productId ={productId}
          images={product.images}
          shoeName={product.title}
          prevPrice={product.oldprice}
          currentPrice={product.price}
          rating={Math.floor(Math.random() * (500 - 5 + 1)) + 5}
          pieces_sold={product.price - product.oldprice}
          reviews={Math.floor(Math.random() * (500 - 5 + 1)) + 5}
        />
      </div> */}

      <div className="mb-20">
        <SectionProductHeader
         productId ={productId}
         //@ts-ignore
          images={product.images}
          shoeName={pathOr('', ['title'], product)}
          prevPrice={pathOr(0, ['oldprice'], product)}
          currentPrice={pathOr(0, ['price'], product)}
          rating={pathOr(0, ['rating'], product)}
          pieces_sold={pathOr(0, ['pieces_sold'], product)}
          reviews={pathOr(0, ['reviews'], product)}
        />
      </div>

      <div className="mb-28">
        <SectionProductInfo
        //@ts-ignore
          overview={product.reviews}
          shipment_details={pathOr([], ['shipment_details'], product)}
          ratings={pathOr(0, ['rating'], product)}
          reviews={pathOr(0, ['reviews'], product)}
        
        />
      </div>

      <div className="mb-28">
        <SectionMoreProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
