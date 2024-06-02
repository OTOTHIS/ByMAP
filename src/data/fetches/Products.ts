import { axiosClient } from "@/components/axios/axios"

import type { fetchProductType, ProductType } from "../types"

//@ts-ignore
const getProducts = async (context: { params: Record<string, any , null> }): Promise<fetchProductType> => {
  try {
    const response = await axiosClient.get('/public/products', {
      params: context.params // Pass the params object directly to axios
    });

    return response.data;
  } catch (err) {
    console.error('Error fetching products:', err);
   
    
  }
};
//@ts-ignore
 const getProduct = async (id: string): Promise<ProductType > => {

  try {
    const response = await axiosClient.get(`/public/products/${id}`);
    return response.data
  } catch (error) {
    console.log(error)
  }

   
};
export {getProducts,getProduct}


