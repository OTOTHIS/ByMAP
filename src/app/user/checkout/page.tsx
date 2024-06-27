'use client';

import Image from 'next/image';
import Link from 'next/link';
import {  useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdStar } from 'react-icons/md';

import LikeButton from '@/components/LikeButton';
import { cleanProductImages, type CartItemType } from '@/data/types';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import InputNumber from '@/shared/InputNumber/InputNumber';

import ContactInfo from './ContactInfo';
import ShippingAddress from './ShippingAddress';
import { axiosClient } from '@/components/axios/axios';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '@/context/cartContext';
import Loading from '@/app/loading';
import { notFound } from 'next/navigation';


const CheckoutPage = () => {
//@ts-ignore
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISH_STRIPE_KEY);
  // const { cartApi, getCarts } = useCart();

  const { cartApi, loading } = useCart();

  if(cartApi?.cart_items.length === 0 || !cartApi ){
    return notFound();
    }

// useEffect(() =>  getCarts(), []);
  const [tabActive, setTabActive] = useState<
    'ContactInfo' | 'ShippingAddress' | 'PaymentMethod'
  >('ShippingAddress');
  const [paymentData, setPaymentData] = useState(null);
  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

 
  const confimOrder = async () => {
   try {
    const res = await axiosClient.post('/user/order/store',paymentData)
    console.log(res.data)
   } catch (error) {
    console.log(error)
   }
  }
  const renderProduct = (item:CartItemType) => {
          
  

    return (
      <div key={item.id} className="flex py-5 last:pb-0">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl md:h-40 md:w-40">
          <Image
            fill
            src={cleanProductImages(item.product.images)[0] ?? 'default'}
            alt={item.product.title}
            className="h-full w-full object-contain object-center"
          />
          <Link className="absolute inset-0" href={`/products/${item.product.id}`} />
        </div>

        <div className="ml-4 flex flex-1 flex-col justify-between">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="font-medium md:text-2xl ">
                  <Link href={`/products/${item.product.id}`}>{item.product.title}</Link>
                </h3>
                <span className="my-1 text-sm text-neutral-500">
                  {item.product.category_name}
                </span>
                <div className="flex items-center gap-1">
                  <MdStar className="text-yellow-400" />
                  <span className="text-sm">{0}</span>
                </div>
              </div>
              <span className="font-medium md:text-xl">${item.product.price}</span>
            </div>
          </div>
          <div className="flex w-full items-end justify-between text-sm">
            <div className="flex items-center gap-3">
              <LikeButton productId={item.product.id.toString()} />
              <AiOutlineDelete className="text-2xl" />
            </div>
            <div>
              <InputNumber  itemId={item.id} qte={item.quantity}  />
            </div>
          </div>
        </div>
      </div>
    );
  };
  //@ts-ignore
  const handlePaymentData = (data) => {
    setPaymentData(data);
  
  };

  const renderLeft = () => {
    return (
      <div className="space-y-8">
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo
            isActive={tabActive === 'ContactInfo'}
            onOpenActive={() => {
              setTabActive('ContactInfo');
              handleScrollToEl('ContactInfo');
            }}
            onCloseActive={() => {
              setTabActive('ShippingAddress');
              handleScrollToEl('ShippingAddress');
            }}
          />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress
            isActive={tabActive === 'ShippingAddress'}
            onOpenActive={() => {
              setTabActive('ShippingAddress');
              handleScrollToEl('ShippingAddress');
            }}
            onCloseActive={() => {
              setTabActive('PaymentMethod');
              handleScrollToEl('PaymentMethod');
            }}
          />
        </div>
      
        <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>

            {/* <PaymentMethod 
            isActive={tabActive === 'PaymentMethod'}
            onOpenActive={() => {
              setTabActive('PaymentMethod');
              handleScrollToEl('PaymentMethod');
            }}
            onCloseActive={() => {
              setTabActive('ShippingAddress');
              handleScrollToEl('ShippingAddress');
            }}
            sendPaymentData={handlePaymentData} 
            /> */}
      </div>
    );
  };
  if (loading) {
    return <Loading />;
  }



  return (
    <div className="nc-CheckoutPage">
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl ">
            Checkout
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="my-10 shrink-0 border-t border-neutral-300 lg:mx-10 lg:my-0 lg:border-l lg:border-t-0 xl:lg:mx-14 2xl:mx-16 " />

          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-neutral-300">

              {        //@ts-ignore

          cartApi?.cart_items.map((item:CartItemType) => renderProduct(item))}
            </div>
          

            <div className="mt-10 border-t border-neutral-300 pt-6 text-sm">
              

              <div className="mt-4 flex justify-between pb-4">
                <span>Subtotal</span>
                <span className="font-semibold">$249.00</span>
              </div>
              <div className="flex justify-between py-4">
                <span>Estimated Delivery & Handling</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between py-4">
                <span>Estimated taxes</span>
                <span className="font-semibold">$24.90</span>
              </div>
              <div className="flex justify-between pt-4 text-base font-semibold">
                <span>Total</span>
                <span>$276.00</span>
              </div>
            </div>
     
            <ButtonPrimary onClick={confimOrder} className="mt-8 w-full">Confirm order</ButtonPrimary>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
