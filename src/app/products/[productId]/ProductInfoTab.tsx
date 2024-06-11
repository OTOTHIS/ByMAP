'use client';

import type { FC } from 'react';
import React, { useState } from 'react';

import { note } from '@/data/content';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import Heading from '@/shared/Heading/Heading';
import { FaRegStar, FaShare } from 'react-icons/fa6';
import { Review } from '@/data/types';

interface ProductInfoTabProps {
  
  overview:Review[]
  shipment_details: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
}

const tabs = ['Overview', 'Shipment details'];

const ProductInfoTab: FC<ProductInfoTabProps> = ({
  overview,
  shipment_details,
}) => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div>
      <Heading className="mb-0">Product Info</Heading>

      <div className="mb-10 flex items-center gap-5">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 ${
              activeTab === tab
                ? 'border-b-2 border-primary'
                : 'text-neutral-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab}
          className={`mb-10 ${activeTab === tab ? 'block' : 'hidden'}`}
        >
          {activeTab === 'Overview' ? (
            <div>
               {overview.map((review)=> 
      {
        const date = new Date(review.created_at);



// Formater la date selon les options
const formattedDate = date.toLocaleDateString('fr-FR', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
 
});

      return  <div className="flex flex-col gap-3 mt-14">
        <div className="flex flex-col gap-4 bg-gray-700 p-4">
        <div className="flex flex-col gap-4 bg-gray-700 p-4">
          {/* Profile and Rating */}
          <div className="flex justify justify-between">
            <div className="flex gap-2">
              <div className="w-7 h-7 text-center rounded-full bg-yellow-500">A</div>
              <span>{review.user.firstname + ' '+ review.user.lastname }</span>
            </div>
            <div className="flex p-1 gap-1 text-orange-300">
            <FaRegStar />
            <FaRegStar /><FaRegStar /><FaRegStar />
            </div>
          </div>
          <div>
          {review.content}   
                  </div>
          <div className="flex justify-between">
            <span>{formattedDate}</span>
           
          </div>
        </div>
      </div>
    </div>
      }

                )} 
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {shipment_details.map((detail) => (
                <div key={detail.title} className="flex items-center gap-2">
                  <ButtonCircle3 size="w-12 h-12" className="bg-gray">
                    {detail.icon}
                  </ButtonCircle3>

                  <div>
                    <p className="text-sm text-neutral-500">{detail.title}</p>
                    <p>{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="space-y-2">
        <h3 className="text-xl font-medium">Noterwtewrwerw*</h3>
        <p className="text-neutral-500">{note}</p>
      </div>
    </div>
  );
};

export default ProductInfoTab;





