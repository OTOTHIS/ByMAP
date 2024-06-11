import './styles/global.css';

import React from 'react';

import AboutUs from './components/AboutUs';
import BestSeller from './components/BestSeller';
import BgMid from './components/BgMid';
import Collections from './components/Collections';
import Featured from './components/Featured';
import Heading from './components/Heading';
import Mid from './components/Mid';
import Newsletter from './components/Newsletter';
import Reviews from './components/Reviews';
import { axiosClient } from '@/components/axios/axios';
import { Magazin } from '@/data/types';
import Direction from './components/direcection';
import Link from 'next/link';
//@ts-ignore
const getMagazin = async (id: string): Promise<Magazin | undefined> => {
  try {
      const response = await axiosClient.get(`/public/magazins/${id}`);
      return response.data.magazin;
  } catch (error) {
      console.error('Error fetching magazin details:', error);
  }
};


const MagazinDetailPage = async ({ params }: { params: { magazinId: string } })  => {
      const { magazinId } = params;
    const magazin = await getMagazin(magazinId);
    if (!magazin) {
        return <div>No magazin found.</div>;
    }


  return (
    <div>
      <div className="py-10 md:pb-32">
        <Heading />
      </div>
  
      <div className="relative flex h-[50vh] items-center justify-center bg-cover bg-center lg:h-screen">
        <BgMid />
        <Mid />
      </div>

      <div className="py-10 md:py-32">
        <Collections  />
      </div>

      <div className="pb-32">
        <BestSeller products={magazin.products} />
      </div>

      <div className="pb-32">
        <Featured />
      </div>

      <div className="bg-[#212529] py-32">
        <Reviews />
      </div>

      <div className="pt-32">
        <AboutUs />
      </div>

      <div className="bg-[#212529] py-10 md:py-20">
        <Newsletter />
      </div>
    </div>
  );
};

export default MagazinDetailPage;



// // src/app/magazins/[magazinId]/page.tsx

// import React from 'react';
// import { axiosClient } from '@/components/axios/axios';
// import { Magazin } from '@/data/types';
// import Image from 'next/image';





// const MagazinDetailPage = async ({ params }: { params: { magazinId: string } }) => {
//     const { magazinId } = params;
//     const magazin = await getMagazin(magazinId);
//     if (!magazin) {
//         return <div>No magazin found.</div>;
//     }

//     return (
//         <div className='font-medium couture-cove'>
//             <h1>{magazin.name}</h1>
//             <p>Latitude: {magazin.Latitude}</p>
//             <p>Longitude: {magazin.Longitude}</p>
//             {magazin.image && <Image width={500} height={500} src={magazin.image} alt={magazin.name} />}
//         </div>
//     );
// };

// export default MagazinDetailPage;
