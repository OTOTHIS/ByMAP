








import React from 'react';
import dynamic from 'next/dynamic';

const SectionBestDeals = dynamic(() => import('./home/SectionBestDeals'));
const SectionProducts = dynamic(() => import('./home/SectionProducts'));

import SectionHeader from './home/SectionHeader';
// import SectionBestDeals from './home/SectionBestDeals';
// import SectionProducts from './home/SectionProducts';
import SectionBrands from './home/SectionBrands';




const page = () => {
  
  return (
    <div>
      <div className="my-7">
        <SectionHeader />
      </div>
 {/* <h1>
  {process.env.NEXT_PUBLIC_LARAVEL_BACKEND_URL }
 </h1>
  */}
      <div className="mb-32">
        <SectionBestDeals />
      </div>

      <div className="mb-32">
        <SectionProducts />
      </div>

      <div className="mb-32">
        <SectionBrands />
      </div>
    </div>
  );
};

export default page;







// import React from 'react';

// import SectionBuyOrExplore from './preview-page-sections/BuyOrExplore';
// import SectionHeader from './preview-page-sections/Header';
// import SectionIncludes from './preview-page-sections/Includes';
// import SectionMainPages from './preview-page-sections/MainPages';
// import SectionMid from './preview-page-sections/MidSection';
// import SectionUtilityPages from './preview-page-sections/UtilityPages';


// const page = () => {
//   return (
//     <div className="pt-20">
//       <div className="relative pb-24">
//         <SectionHeader />
//       </div>

//       <div className="bg-gray py-24">
//         <SectionIncludes />
//       </div>

//       <div className="py-24">
//         <SectionMid />
//       </div>

//       <div className="bg-gray py-24" id="pages">
//         <SectionMainPages />
//       </div>

//       <div className="py-24">
//         <SectionUtilityPages />
//       </div>

//       <div className="mb-24 bg-gray py-24">
//         <SectionBuyOrExplore />
//       </div>
//     </div>
//   );
// };

// export default page;
