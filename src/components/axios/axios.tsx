import Page404 from "@/app/not-found";
import axios from "axios";
import Cookies from 'universal-cookie';
const cookie = new Cookies();

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LARAVEL_BACKEND_URL + "/api",
  withCredentials: true,
});

axiosClient.interceptors.request.use(function (config) {
  const token = cookie.get('Authorization');
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }else{
    Page404();
  }
  return config;
});

export { axiosClient };
