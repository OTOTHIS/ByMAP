

import { axiosClient } from "@/components/axios/axios";
import type { CategorieType } from "../types"

const getCategories = async ():Promise<CategorieType[]> => {
  const response = await axiosClient.get('/public/categories')
 return response.data;



}

//  const getProduct = async (id: string): Promise<ProductType > => {
//     const response = await axiosClient.get(`/public/products/${id}`);
//       return response.data
// };
export {getCategories}


