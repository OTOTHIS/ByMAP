'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { RiSearch2Line } from 'react-icons/ri';

import avatar from '@/images/avatar.png';
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
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};



const {logout} = useUser()
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

       {!auth && <div className="relative hidden lg:block">
          <Link href={'/login'} >LOGIN</Link>
        </div>} 


        <div className="flex items-center divide-x divide-neutral-300">
      {(auth && path != '/cart') ? <CartSideBar /> :''} 
  

<div className="relative  text-left flex items-center gap-3">
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        
        className=" bg-gray w-10 h-10 rounded-full"
      >
        <Image
          src={avatar}
          alt="avatar"
          className="h-full w-full object-cover object-center"
        />
      </button>
   
      {isOpen && (
        <div onMouseLeave={toggleDropdown} className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
          <ul className="py-2 text-sm text-gray-700 " >
          <li>
              <span className="block px-4 py-2 hover:bg-gray-100 border-b-2 border-b-slate-300
              ">
                
              {userApi?.firstname}
              </span>
            </li>


          <li>
              <Link href="/Favorites" className="block px-4 py-2 hover:bg-gray-100">
                Favorite
              </Link>
            </li>
            {/* <li>
              <Link href="/test" className="block px-4 py-2 hover:bg-gray-100">
                twa
              </Link>
            </li> */}
            <li>
              <button onClick={()=> {
                logout()
              }} className="block px-4 py-2 hover:bg-gray-100">
                Deconexion
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
