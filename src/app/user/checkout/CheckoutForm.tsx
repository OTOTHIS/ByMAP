'use client'
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
  import { axiosClient } from '@/components/axios/axios';

import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cartContext';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import { useUser } from '@/context/userContext';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
 const {getCarts} = useCart()
 const {userApi , getUser} = useUser()
 if(!userApi) {
  getUser()
 }
  const [errorMessage, setErrorMessage] = useState('');

const router = useRouter()
  // const [order, setOrder] = useState([])

  // const fetchClientSecret = async () => {
  //   try {
  //     const response = await axiosClient.get('/user/stripe_client');
  //     setClientSecret(response.data.client_secret);
  //     // setOrder(response.data.order);
  //   } catch (error) {
  //     setErrorMessage('Failed to fetch client secret.');
  //   }
  // };


  // useEffect(() => {
  //   fetchClientSecret();
  //   getUser().then(User=>SetUserA(User)).catch(err=>console.log(err))
  // }, []);

  // const handleSubmit = async (event:any) => {

  //   fetchClientSecret();
  //   event.preventDefault();
  //   if (!stripe || !elements || !clientSecret) {
  //     return;
  //   }

  //   const cardElement = elements.getElement(CardElement);

  //   if (!cardElement) {
  //     setErrorMessage('Failed to load card element.');
  //     return;
  //   }

  //   try {
  //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: cardElement,
  //         billing_details: {
  //           name: user?.name,
  //         },
  //       },
  //       return_url: 'http://localhost:3000/checkout?message=success', // Specify the return URL here
  //     });
   
  //     if (error) {
  //       //@ts-ignore
  //       setErrorMessage(error.message);
  //       return;
  //     }
  //     console.log(paymentIntent);
    
  //     if (paymentIntent.status === 'succeeded') {
  //       //@ts-ignore
  //       axiosClient.post('/user/order').then(res=>{
  //         alert('tester')
  //       }).catch(err=> console.log(err))
    
  //     } else {
  //       setErrorMessage('Payment not successful. Please try again.');
  //     }
  //   } catch (error) {
  //    //@ts-ignore
  //     setErrorMessage(error.message);
  //   }
  // };




  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await axiosClient.get('/user/stripe_client');
const clientSecret = response.data.client_secret
    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded properly.');
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    if (!cardElement) {
      setErrorMessage('Failed to load card element.');
      return;
    }
  
    try {
      // await fetchClientSecret();
      
      if (!clientSecret) {
        setErrorMessage('Failed to fetch client secret.');
        return;
      }
  
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name:  'test',
            // user?.name 
          },
        },
        return_url: 'http://localhost:3000/checkout?message=success', // Specify the return URL here
      });
  
      if (error) {
        //@ts-ignore
        setErrorMessage(error.message);
        return;
      }
  try {
    console.log(paymentIntent);
    const response =  await axiosClient.post('/user/order');
    getCarts();
    router.push('/user/facture?order='+response.data.order.id)
  } catch (error) {
    alert(error)
  }
 

    } catch (paymentError) {
              //@ts-ignore
      setErrorMessage(paymentError.message);
    }
  };
  







  return (
    <form>
      <CardElement />
      
      <ButtonSecondary
    
            sizeClass="py-2 px-4 mt-4"
            className="border-2 border-primary text-primary"
            //@ts-ignore
            type='button' onClick={handleSubmit}
          >
            Pay
          </ButtonSecondary>

      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
