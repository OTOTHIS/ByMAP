'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { RiSearch2Line } from 'react-icons/ri';

import avatar from '@/images/avatar.png';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';

import CartSideBar from '../CartSideBar';
import MenuBar from './MenuBar';
import Cookies from 'universal-cookie';
import { usePathname } from 'next/navigation';
import { useUser } from '@/context/userContext';
import {  fetchProductType } from '@/data/types';
import { getProducts } from '@/data/fetches/Products';

const MainNav =  () => {
const cookie = new Cookies()
const path = usePathname();
const {userApi} = useUser();
const auth = cookie.get('userRole');

const [Product, setProduct] = useState<fetchProductType>()

const searshProduct  = async (e: React.ChangeEvent<HTMLInputElement>) =>{
  const val = e.target.value ;
  try {
    const response = await getProducts({
      params: {
        limit: 5,
       searsh:val
      }
    });
    setProduct(response);
  } catch (error) {
    console.log(error)
  }
    console.log(Product)
}


  return (
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex">
          <Input
            className="border-transparent bg-white placeholder:text-neutral-500 focus:border-transparent"
            type="search"
            placeholder="try 'Nike Air Jordan'"
            //@ts-ignore
            onKeyUp={searshProduct}
          />
          <RiSearch2Line className="text-2xl text-neutral-500" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">

      {(auth && path != '/cart') ? <div className="relative hidden lg:block">
          <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-full bg-red-600" />
          <FaRegBell className="text-2xl" />
        </div> :''} 
        

        <div className="flex items-center divide-x divide-neutral-300">
      {(auth && path != '/cart') ? <CartSideBar /> :''} 
          <div className="flex items-center gap-2 pl-5">
            <ButtonCircle3 className="overflow-hidden bg-gray" size="w-10 h-10">
              <Image
                src={avatar}
                alt="avatar"
                className="h-full w-full object-cover object-center"
              />
            </ButtonCircle3>
            <Link href="/Profile" className="hidden text-sm lg:block">
              
             {

              //@ts-ignore
             userApi?.firstname
             
             }
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
