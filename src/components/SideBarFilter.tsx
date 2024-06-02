'use client';

import 'rc-slider/assets/index.css';

import {  pathOr } from 'ramda';
import Slider from 'rc-slider';
import React, { useEffect, useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useRouter } from 'next/navigation';

import Heading from '@/shared/Heading/Heading';
import Input from '@/shared/Input/Input';
import { CategorieType, MagazinType } from '@/data/types';
import { getCategories } from '@/data/fetches/categories';
import { getMagazins } from '@/data/fetches/magazins';
import { axiosClient } from './axios/axios';


// DEMO DATA
const brands = [
  {
    name: 'All',
  },
  {
    name: 'Nike',
  },
  {
    name: 'New Balance',
  },
  {
    name: 'Rick Owens',
  },
];

// const categories = ['Men', 'Women', 'Unisex', 'Kids'];
// const categories = ['excepturi', 'aut', 'facere', 'cumque'];

// const Magazin = [
//   'New York',
//   'Canada',
//   'Bangladesh',
//   'Indonesia',
//   'San Francisco',
// ];

const PRICE_RANGE = [1, 500];
//
const  SidebarFilters =  () => {
  const [rangePrices, setRangePrices] = useState([100, 500]);
  const [activeBrand, setActiveBrand] = useState('');
  const [activeCategoy, setactiveCategoy] = useState('');
  const [activeMagazin, setActiveMagazin] = useState('');
  const [categories,setCategories]=useState<CategorieType[]>()
  const [magazins,setMagazins]=useState<MagazinType[]>()
  const magazinSersh = useRef('')

  const router = useRouter();



  const handleFilterChange = () => {
    const query = new URLSearchParams({
      rangePrices: rangePrices.join('-'),
      activeBrand,
      activeCategoy,
      activeMagazin,
    }).toString();

    const pathname = '/products';

    router.push(`${pathname}?${query}`);
  };

  useEffect(() => {
    handleFilterChange();
  }, [rangePrices,activeBrand,activeCategoy,activeMagazin]);


  const fetchCategoriesData = async () => {
try {
  const res = await getCategories();
  setCategories(res);
  console.log(res)
} catch (error) {
  console.log(error)
}

  }

  const fetchMagazinsData = async () => {
    try {
      const res = await getMagazins();
      //@ts-ignore
      setMagazins(res.data);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    
      }


  useEffect(() => {
  fetchCategoriesData()
  fetchMagazinsData();
  
  }, []);

  const filterMagazim = async () => {

       //@ts-ignore
    const name = magazinSersh.current?.value

    try {
      if (name) {
        const res = await axiosClient.get(`/public/magazins?search=${name}`);
        setMagazins(res.data);
        console.log(res.data);
      } else {
        fetchMagazinsData();
      }
    } catch (error) {
      console.error('Error fetching magazines:', error);
    }


  }

  const renderTabsBrands = () => {
    return (
      <div className="relative flex flex-col space-y-4 pb-8">
        <h3 className="mb-2.5 text-xl font-medium">Brands</h3>
        <div className="grid grid-cols-2 gap-4">
          {brands.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveBrand(item.name)}
              className={`rounded-lg py-4 ${
                activeBrand === item.name ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // OK
  const renderTabsGender = () => {
    return (
      <div className="relative flex flex-col space-y-4 py-8">
        <h3 className="mb-2.5 text-xl font-medium">Categories</h3>
        <div className="grid grid-cols-2 gap-4">
          {categories?.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => activeCategoy != category.name ? setactiveCategoy(category.name) : setactiveCategoy('')}
              className={`rounded-lg py-4 ${
                activeCategoy === category.name ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // OK
  const renderTabsPriceRage = () => {
    return (
      <div className="relative flex flex-col space-y-5 py-8 pr-3">
        <div className="space-y-5">
          <span className="font-semibold">Price range</span>
          <Slider
            range
            min={PRICE_RANGE[0]}
            max={PRICE_RANGE[1]}
            step={1}
            defaultValue={[
              pathOr(0, [0], rangePrices),
              pathOr(0, [1], rangePrices),
            ]}
            allowCross={false}
            onChange={(_input: number | number[]) =>
              setRangePrices(_input as number[])
            }
          />
        </div>

        <div className="flex justify-between space-x-5">
          <div>
            <div className="block text-sm font-medium">Min price</div>
            <div className="relative mt-1 rounded-md">
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                $
              </span>
              <input
                type="text"
                name="minPrice"
                disabled
                id="minPrice"
                className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
                value={rangePrices[0]}
              />
            </div>
          </div>
          <div>
            <div className="block text-sm font-medium">Max price</div>
            <div className="relative mt-1 rounded-md">
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500 sm:text-sm">
                $
              </span>
              <input
                type="text"
                disabled
                name="maxPrice"
                id="maxPrice"
                className="block w-32 rounded-full border-neutral-300 bg-transparent pl-4 pr-10 sm:text-sm"
                value={rangePrices[1]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  // OK
  const renderTabsMagazin = () => {
    return (
      <div className="relative flex flex-col space-y-4 py-8">
        <h3 className="mb-2.5 text-xl font-medium">Magazin</h3>
        <div className="mb-2 flex items-center gap-2 space-y-3 rounded-full border border-neutral-300 px-4 md:flex md:space-y-0">
          <MdSearch className="text-2xl text-neutral-500" />
          <Input
            type="search"
            rounded="rounded-full"
            placeholder="Search..."
      //@ts-ignore
            ref={magazinSersh}
            onChange={filterMagazim}
            sizeClass="h-12 px-0 py-3"
            className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {magazins?.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => activeMagazin != item.name ? setActiveMagazin(item.name) : setActiveMagazin('')}
              className={`rounded-lg py-4 ${
                activeMagazin === item.name ? 'bg-primary text-white' : 'bg-gray'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="top-28 lg:sticky">
      <Heading className="mb-0">Filter products</Heading>
      <div className="divide-y divide-neutral-300">
        {renderTabsBrands()}
        {renderTabsGender()}
        {renderTabsPriceRage()}
        {renderTabsMagazin()}
      </div>
    </div>
  );
};

export default SidebarFilters;
