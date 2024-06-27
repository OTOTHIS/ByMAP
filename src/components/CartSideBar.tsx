'use client';

// import { Dialog, Transition } from '@headlessui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { Fragment,  useState } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FaBagShopping } from 'react-icons/fa6';
// import { MdClose, MdStar } from 'react-icons/md';

// import { cleanProductImages, type CartItemType} from '@/data/types';
// import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
// import ButtonPrimary from '@/shared/Button/ButtonPrimary';
// import ButtonSecondary from '@/shared/Button/ButtonSecondary';
// import InputNumber from '@/shared/InputNumber/InputNumber';

// import LikeButton from './LikeButton';

// import { useCart } from '@/context/cartContext';

// // const fetchCartUser = async () => {
// //   const res = await axiosClient.get('/user/carts');
// //   return res.data;
// // };

// export interface CartSideBarProps {}
// const CartSideBar: React.FC<CartSideBarProps> = () => {
//   const [isVisable, setIsVisable] = useState(false);

//   const handleOpenMenu = () => setIsVisable(true);
//   const handleCloseMenu = () => setIsVisable(false);
//   //@ts-ignore 
//    const { cartApi , getCarts } = useCart();

//   // const [cart, setCart] = useState<CartType>();
// //   const searchParams = useSearchParams()
// //  const added =  searchParams.get("added");
// //  const order =  searchParams.get("order");


 
//   // useEffect(() => {
//   //   fetchCartUser().then(setCart).catch(console.error);
//   //   console.log(added)
//   // }, [added,order]);

// //   if (!cartApi) {
// //  alert('cart not found')
  
// //   }else {
// //     alert('cart found')
// //   }


//   const renderProduct = (item: CartItemType) => {
//     const { product} = item;

//     return (
//       <div key={product.id} className="flex py-5 last:pb-0">
//         <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
//           <Image
//             fill
//             src={cleanProductImages(product.images)[0]}
//             alt={product.title}
//             className="h-full w-full object-contain object-center"
//           />
//           <Link
//             onClick={handleCloseMenu}
//             className="absolute inset-0"
//             href={`/products/${product.id}`}
//           />
//         </div>

//         <div className="ml-4 flex flex-1 flex-col justify-between">
//           <div>
//             <div className="flex justify-between ">
//               <div>
//                 <h3 className="font-medium ">
//                   <Link onClick={handleCloseMenu} href={`/products/${product.id}`}>
//                     {product.title}efee
//                   </Link>
//                 </h3>
//                 <span className="my-1 text-sm text-neutral-500">
//                   {product.title}
//                 </span>
//                 <div className="flex items-center gap-1">
//                   <MdStar className="text-yellow-400" />
//                   <span className="text-sm">{6}</span>
//                 </div>
//               </div>
//               <span className=" font-medium">{product.price} MAD</span>
//               {/* <span className=" font-medium">{item.quantity} qte</span> */}
//             </div>
//           </div>
//           <div className="flex w-full items-end justify-between text-sm">
//             <div className="flex items-center gap-3">
//               <LikeButton productId={product.id.toString()} />
//               <AiOutlineDelete className="text-2xl" />
//             </div>
//             <div>
//               <InputNumber qte={item.quantity} itemId={item.id} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderContent = () => {
//     return (
//       <Transition appear show={isVisable} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-50 overflow-y-auto"
//           onClose={handleCloseMenu}
//         >
//           <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
//             <Transition.Child
//               as={Fragment}
//               enter="transition duration-100 transform"
//               enterFrom="opacity-0 translate-x-full"
//               enterTo="opacity-100 translate-x-0"
//               leave="transition duration-150 transform"
//               leaveFrom="opacity-100 translate-x-0"
//               leaveTo="opacity-0 translate-x-full"
//             >
//               <div className="relative z-20">
//                 <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
//                   <div className="relative h-screen bg-white">
//                     <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-xl font-semibold">Shopping cart</h3>
//                         <ButtonCircle3 onClick={handleCloseMenu}>
//                           <MdClose className="text-2xl" />
//                         </ButtonCircle3>
//                       </div>
//                       <div className="divide-y divide-neutral-300">
//                         {cartApi?.cart_items.map((item:CartItemType) => renderProduct(item))}
//                       </div>
//                     </div>
//                     <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
//                       <p className="flex justify-between">
//                         <span>
//                           <span className="font-medium">Subtotal</span>
//                           <span className="block text-sm text-neutral-500">
//                             Shipping and taxes calculated at checkout.
//                           </span>
//                         </span>
//                         <span className="text-xl font-medium">{cartApi?.total} MAD </span>
//                       </p>
//                       <div className="mt-5 flex items-center gap-5">
//                         <ButtonPrimary
//                           href="/user/checkout"
//                           onClick={handleCloseMenu}
//                           className="w-full flex-1"
//                         >
//                           Checkout
//                         </ButtonPrimary>
//                         <ButtonSecondary
//                           onClick={handleCloseMenu}
//                           href="/user/cart"
//                           className="w-full flex-1 border-2 border-primary text-primary"
//                         >
//                           View cart
//                         </ButtonSecondary>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Transition.Child>

//             <Transition.Child
//               as={Fragment}
//               enter=" duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave=" duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     );
//   };

//   return (
//     <>
//       <button
//         type="button"
//         onClick={handleOpenMenu}
//         className="mx-5 flex items-center gap-1 rounded-full bg-neutral-100 p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//       >
//         <FaBagShopping className="text-2xl" />
      
//         <span className="hidden text-sm lg:block">{
//         //@ts-ignore
//         cartApi?.cart_items.length} items</span>
//       </button>

//       {renderContent()}
//     </>
//   );
// };

// export default CartSideBar;


// import { Dialog, Transition } from '@headlessui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { Fragment, useState } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { FaBagShopping } from 'react-icons/fa6';
// import { MdClose, MdStar } from 'react-icons/md';

// import { cleanProductImages, type CartItemType } from '@/data/types';
// import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
// import ButtonPrimary from '@/shared/Button/ButtonPrimary';
// import ButtonSecondary from '@/shared/Button/ButtonSecondary';
// import InputNumber from '@/shared/InputNumber/InputNumber';

// import LikeButton from './LikeButton';

// import { useCart } from '@/context/cartContext';

// export interface CartSideBarProps {}
// const CartSideBar: React.FC<CartSideBarProps> = () => {
//   const [isVisable, setIsVisable] = useState(false);

//   const handleOpenMenu = () => setIsVisable(true);
//   const handleCloseMenu = () => setIsVisable(false);
//   const { cartApi, error } = useCart();

//   const renderProduct = (item: CartItemType) => {
//     const { product } = item;

//     return (
//       <div key={product.id} className="flex py-5 last:pb-0">
//         <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
//           <Image
//             fill
//             src={cleanProductImages(product.images)[0]}
//             alt={product.title}
//             className="h-full w-full object-contain object-center"
//           />
//           <Link
//             onClick={handleCloseMenu}
//             className="absolute inset-0"
//             href={`/products/${product.id}`}
//           />
//         </div>

//         <div className="ml-4 flex flex-1 flex-col justify-between">
//           <div>
//             <div className="flex justify-between ">
//               <div>
//                 <h3 className="font-medium ">
//                   <Link onClick={handleCloseMenu} href={`/products/${product.id}`}>
//                     {product.title}efee
//                   </Link>
//                 </h3>
//                 <span className="my-1 text-sm text-neutral-500">
//                   {product.title}
//                 </span>
//                 <div className="flex items-center gap-1">
//                   <MdStar className="text-yellow-400" />
//                   <span className="text-sm">{6}</span>
//                 </div>
//               </div>
//               <span className=" font-medium">{product.price} MAD</span>
//             </div>
//           </div>
//           <div className="flex w-full items-end justify-between text-sm">
//             <div className="flex items-center gap-3">
//               <LikeButton productId={product.id.toString()} />
//               <AiOutlineDelete className="text-2xl" />
//             </div>
//             <div>
//               <InputNumber qte={item.quantity} itemId={item.id} />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderContent = () => {
//     if (error === 'Cart not found') {
//       return (
//         <Transition appear show={isVisable} as={Fragment}>
//           <Dialog
//             as="div"
//             className="fixed inset-0 z-50 overflow-y-auto"
//             onClose={handleCloseMenu}
//           >
//             <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition duration-100 transform"
//                 enterFrom="opacity-0 translate-x-full"
//                 enterTo="opacity-100 translate-x-0"
//                 leave="transition duration-150 transform"
//                 leaveFrom="opacity-100 translate-x-0"
//                 leaveTo="opacity-0 translate-x-full"
//               >
//                 <div className="relative z-20">
//                   <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
//                     <div className="relative h-screen bg-white p-5">
//                       <h1 className="text-xl font-semibold">Cart not found</h1>
//                     </div>
//                   </div>
//                 </div>
//               </Transition.Child>
//               <Transition.Child
//                 as={Fragment}
//                 enter=" duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave=" duration-200"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
//               </Transition.Child>
//             </div>
//           </Dialog>
//         </Transition>
//       );
//     }

//     return (
//       <Transition appear show={isVisable} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-50 overflow-y-auto"
//           onClose={handleCloseMenu}
//         >
//           <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
//             <Transition.Child
//               as={Fragment}
//               enter="transition duration-100 transform"
//               enterFrom="opacity-0 translate-x-full"
//               enterTo="opacity-100 translate-x-0"
//               leave="transition duration-150 transform"
//               leaveFrom="opacity-100 translate-x-0"
//               leaveTo="opacity-0 translate-x-full"
//             >
//               <div className="relative z-20">
//                 <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
//                   <div className="relative h-screen bg-white">
//                     <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-xl font-semibold">Shopping cart</h3>
//                         <ButtonCircle3 onClick={handleCloseMenu}>
//                           <MdClose className="text-2xl" />
//                         </ButtonCircle3>
//                       </div>
//                       <div className="divide-y divide-neutral-300">
//                         {cartApi?.cart_items.map((item: CartItemType) => renderProduct(item)) : ? if(!cartApi) {
//   return   <div className="container">
//   <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-24">
//     <h1
//       className="text-[100px] font-extrabold text-primary"
//       style={{ lineHeight: '1em' }}
//     >
//       Votre panier est vide
//     </h1>
//     <Image 
//       src="/assets/images/emptycart.png" 
//       alt="Panier vide" 
//       width={200}
//       height={200}
//     />
//     <h4 className="text-4xl font-semibold">Explorez nos produits</h4>
//     <p className="text-neutral-500">
//       Votre panier est actuellement vide. Parcourez notre catalogue pour trouver des articles qui vous intéressent.
//     </p>
//     <div className="flex items-center justify-center gap-5">
//       <ButtonPrimary sizeClass="px-5 py-4" href="/products">Explorer les produits</ButtonPrimary>
//       <ButtonSecondary
//         href="/home"
//         className="border-2 border-primary text-primary"
//       >
//         Retour à l'accueil
//       </ButtonSecondary>
//     </div>
//   </div>
// </div>
// }}
//                       </div>
//                     </div>
//                     <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
//                       <p className="flex justify-between">
//                         <span>
//                           <span className="font-medium">Subtotal</span>
//                           <span className="block text-sm text-neutral-500">
//                             Shipping and taxes calculated at checkout.
//                           </span>
//                         </span>
//                         <span className="text-xl font-medium">{cartApi?.total} MAD </span>
//                       </p>
//                       <div className="mt-5 flex items-center gap-5">
//                         <ButtonPrimary
//                           href="/user/checkout"
//                           onClick={handleCloseMenu}
//                           className="w-full flex-1"
//                         >
//                           Checkout
//                         </ButtonPrimary>
//                         <ButtonSecondary
//                           onClick={handleCloseMenu}
//                           href="/user/cart"
//                           className="w-full flex-1 border-2 border-primary text-primary"
//                         >
//                           View cart
//                         </ButtonSecondary>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Transition.Child>

//             <Transition.Child
//               as={Fragment}
//               enter=" duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave=" duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     );
//   };

//   return (
//     <>
//       <button
//         type="button"
//         onClick={handleOpenMenu}
//         className="mx-5 flex items-center gap-1 rounded-full bg-neutral-100 p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//       >
//         <FaBagShopping className="text-2xl" />
//         <span className="hidden text-sm lg:block">
//           {cartApi?.cart_items.length || 0} items
//         </span>
//       </button>
//       {renderContent()}
//     </>
//   );
// };

// export default CartSideBar;





import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaBagShopping } from 'react-icons/fa6';
import { MdClose, MdStar } from 'react-icons/md';

import { cleanProductImages, type CartItemType } from '@/data/types';
import ButtonCircle3 from '@/shared/Button/ButtonCircle3';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import InputNumber from '@/shared/InputNumber/InputNumber';

import LikeButton from './LikeButton';

import { useCart } from '@/context/cartContext';

export interface CartSideBarProps {}
const CartSideBar: React.FC<CartSideBarProps> = () => {
  const [isVisable, setIsVisable] = useState(false);

  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);
  const { cartApi, error } = useCart();

  const renderProduct = (item: CartItemType) => {
    const { product } = item;

    return (
      <div key={product.id} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
          <Image
            fill
            src={cleanProductImages(product.images)[0]}
            alt={product.title}
            className="h-full w-full object-contain object-center"
          />
          <Link
            onClick={handleCloseMenu}
            className="absolute inset-0"
            href={`/products/${product.id}`}
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="font-medium ">
                  <Link onClick={handleCloseMenu} href={`/products/${product.id}`}>
                    {product.title}
                  </Link>
                </h3>
                <span className="my-1 text-sm text-neutral-500">
                  {product.title}
                </span>
                <div className="flex items-center gap-1">
                  <MdStar className="text-yellow-400" />
                  <span className="text-sm">{6}</span>
                </div>
              </div>
              <span className=" font-medium">{product.price} MAD</span>
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div className="flex items-center gap-3">
              <LikeButton productId={product.id.toString()} />
              <AiOutlineDelete className="text-2xl" />
            </div>
            <div>
              <InputNumber qte={item.quantity} itemId={item.id} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (!cartApi) {
      return (
        <div className="mx-auto flex max-w-2xl h-screen flex-col items-center justify-center gap-5 py-24">
          <div>
            
            <Image 
              src="/assets/images/emptycart.png" 
              alt="Panier vide" 
              width={200}
              height={200}
            />
            
          </div>
        </div>
      );
    }

    return (
      <div className="relative h-screen bg-white">
        <div className="hiddenScrollbar h-screen overflow-y-auto p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Shopping cart</h3>
            <ButtonCircle3 onClick={handleCloseMenu}>
              <MdClose className="text-2xl" />
            </ButtonCircle3>
          </div>
          <div className="divide-y divide-neutral-300">
            {cartApi.cart_items.map((item: CartItemType) => renderProduct(item))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-neutral-50 p-5">
          <p className="flex justify-between">
            <span>
              <span className="font-medium">Subtotal</span>
              <span className="block text-sm text-neutral-500">
                Shipping and taxes calculated at checkout.
              </span>
            </span>
            <span className="text-xl font-medium">{cartApi.total} MAD </span>
          </p>
          <div className="mt-5 flex items-center gap-5">
            <ButtonPrimary
              href="/user/checkout"
              onClick={handleCloseMenu}
              className="w-full flex-1"
            >
              Checkout
            </ButtonPrimary>
            <ButtonSecondary
              onClick={handleCloseMenu}
              href="/user/cart"
              className="w-full flex-1 border-2 border-primary text-primary"
            >
              View cart
            </ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpenMenu}
        className="mx-5 flex items-center gap-1 rounded-full bg-neutral-100 p-2 text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <FaBagShopping className="text-2xl" />
        <span className="hidden text-sm lg:block">
          {cartApi?.cart_items.length || 0} items
        </span>
      </button>
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="z-max fixed inset-y-0 right-0 w-full max-w-md outline-none focus:outline-none md:max-w-md">
            <Transition.Child
              as={Fragment}
              enter="transition duration-100 transform"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="transition duration-150 transform"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <div className="relative z-20">
                <div className="overflow-hidden shadow-lg ring-1 ring-black/5">
                  {renderContent()}
                </div>
              </div>
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter=" duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave=" duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-900/60" />
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CartSideBar;
