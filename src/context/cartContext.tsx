// "use client"

// import { axiosClient } from '@/components/axios/axios';
// import { CartType } from '@/data/types';
// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import Cookies from 'universal-cookie';

// interface CartContextType {
//   cartApi: CartType | null;
//   addToCartApi: (product: string) => Promise<void>;
//   getCarts: () => Promise<void>;
//   loading: boolean;
//   error: string | null;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// const fetchCartUser = async (): Promise<CartType | undefined> => {
//   const res = await axiosClient.get('/user/carts');
//   if(res.status == 200 || res.status == 201){
//     return res.data as CartType;
//   }
 
// };

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartApi, setCartApi] = useState<CartType | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const getCarts = async () => {
//     const cookie = new Cookies()
//     try {
//       const token = cookie.get('Authorization');
//       if(token){
//         setLoading(true);
//         const cartData = await fetchCartUser();
//         setCartApi(cartData);
//         setError(null);
//         localStorage.setItem('cart', JSON.stringify(cartData));
//       }
 
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//       setError('Failed to fetch cart data');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCartApi(JSON.parse(storedCart));
//       setLoading(false);
//     } else {
//       console.log('empty cart')
//         }
//   }, []);

//   const addToCartApi = async (product: string) => {
//     try {
//       await axiosClient.post('/user/carts', { product_id: product });
//       await getCarts();
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       setError('Failed to add item to cart');
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartApi, addToCartApi, getCarts, loading, error }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

"use client";

import { axiosClient } from '@/components/axios/axios';
import { CartType } from '@/data/types';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'universal-cookie';

interface CartContextType {
  cartApi: CartType | null;
  addToCartApi: (product: string) => Promise<void>;
  getCarts: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const fetchCartUser = async (): Promise<CartType | undefined> => {
  const res = await axiosClient.get('/user/carts');
  if (res.status === 200 || res.status === 201) {
    return res.data as CartType;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartApi, setCartApi] = useState<CartType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const getCarts = async () => {
    const cookie = new Cookies();
    try {
      const token = cookie.get('Authorization');
      if (token) {
        setLoading(true);
        const cartData = await fetchCartUser();
        if (cartData) {
          setCartApi(cartData);
          setError(null);
          localStorage.setItem('cart', JSON.stringify(cartData));
        } else {
          setCartApi(null);
        }
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
      setError('Failed to fetch cart data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartApi(JSON.parse(storedCart));
      setLoading(false);
    } else if (initialLoad) {
      setInitialLoad(false);
      getCarts();
    }
  }, [initialLoad]);

  const addToCartApi = async (product: string) => {
    try {
      await axiosClient.post('/user/carts', { product_id: product });
      await getCarts();
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError('Failed to add item to cart');
    }
  };

  return (
    <CartContext.Provider value={{ cartApi, addToCartApi, getCarts, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
