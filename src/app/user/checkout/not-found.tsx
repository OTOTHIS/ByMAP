import React from 'react';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Image from 'next/image';

const Page404 = () => {
  return (
    <div className="container">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-24">
        <h1
          className="text-[100px] font-extrabold text-primary"
          style={{ lineHeight: '1em' }}
        >
          Votre panier est vide
        </h1>
        <Image 
          src="/assets/images/emptycart.png" 
          alt="Panier vide" 
          width={200}
          height={200}
        />
        <h4 className="text-4xl font-semibold">Explorez nos produits</h4>
        <p className="text-neutral-500">
          Votre panier est actuellement vide. Parcourez notre catalogue pour trouver des articles qui vous intéressent.
        </p>
        <div className="flex items-center justify-center gap-5">
          <ButtonPrimary sizeClass="px-5 py-4" href="/products">Explorer les produits</ButtonPrimary>
          <ButtonSecondary
            href="/home"
            className="border-2 border-primary text-primary"
          >
            Retour à l'accueil
          </ButtonSecondary>
        </div>
      </div>
    </div>
  );
};

export default Page404;
