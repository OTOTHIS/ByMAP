import { axiosClient } from "@/components/axios/axios";
import {MagazinType } from "../types";


const getMagazins = async ():Promise<MagazinType[]> => {
    const response = await axiosClient.get('/public/magazins')
   return response.data;
  
  }

  export {getMagazins}