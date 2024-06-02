import { axiosClient } from "@/components/axios/axios";
import {UserType } from "../types";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const userRole = cookie.get('userRole');

const getUser = async ():Promise<UserType> => {
    const response = await axiosClient.get(`/${userRole}`)
   return response.data;
  
  }

  export {getUser}