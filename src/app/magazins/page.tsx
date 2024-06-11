

import React from 'react';
import SectionHeader from './_SectionHeader';
import dynamic from 'next/dynamic';
// Dynamically import the sections
const SectionProducts = dynamic(() => import('./_SectionProducts'), { ssr: false });
const SectionCategories = dynamic(() => import('./_SectionCategories'), { ssr: false });
const SectionMidBanner = dynamic(() => import('./_SectionMidBanner'), { ssr: false });
const SectionStyle = dynamic(() => import('./_SectionStyle'), { ssr: false });
const MagazinsMap = dynamic(() => import('./_magazinsMap'), { ssr: false });





const MagazinsPage = () => {
  return (
    <div>
      <div className="my-7">
        <SectionHeader />
      </div>

      <div className="py-24">
        <SectionProducts />
      </div>

      <div className="pb-24">
        <SectionCategories />
      </div>

      <div className="pb-24">
        <SectionMidBanner />
      </div>

      <div className="pb-24">
        <SectionStyle />
      </div>
      <div className="pb-24">
        <MagazinsMap />
      </div>

      
    </div>
  );
};

export default MagazinsPage;