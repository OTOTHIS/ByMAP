import Image from 'next/image';
import React from 'react';

import image from '../images/bgAdd.png';

const BgMid = () => {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Image
        src={image}
        alt="image"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default BgMid;
