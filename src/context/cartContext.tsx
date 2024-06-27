// "use client"

// import { axiosClient } from '@/components/axios/axios';
// import { CartType } from '@/data/types';
// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import Cookies from 'universal-cookie';

// interface CartContextType {
//   cartApi: CartType ;
//   addToCartApi: (product: string ,  taille:string) => Promise<void>;
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
//   const [cartApi, setCartApi] = useState<CartType>();
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const getCarts = async () => {
//     const cookie = new Cookies()
//     try {
//       const token = cookie.get('Authorization');
//       if(token){
//         setLoading(true);
//         const cartData = await fetchCartUser();
//         //@ts-ignore
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

//   const addToCartApi = async (product: string , taille:string) => {
//     try {
//       await axiosClient.post('/user/carts', { product_id: product  ,taille });
//       await getCarts();
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       setError('Failed to add item to cart');
//     }
//   };

//   return (
//     //@ts-ignore
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

// "use client";

// import { axiosClient } from '@/components/axios/axios';
// import { CartType } from '@/data/types';
// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import Cookies from 'universal-cookie';

// interface CartContextType {
//   cartApi: CartType | null;
//   addToCartApi: (product: string, taille:string) => Promise<void>;
//   getCarts: () => Promise<void>;
//   loading: boolean;
//   error: string | null;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// const fetchCartUser = async (): Promise<CartType | undefined> => {
//   const res = await axiosClient.get('/user/carts');
//   if (res.status === 200 || res.status === 201) {
//     return res.data as CartType;
//   }
// };

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cartApi, setCartApi] = useState<CartType | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [initialLoad, setInitialLoad] = useState<boolean>(true);

//   const getCarts = async () => {
//     const cookie = new Cookies();
//     try {
//       const token = cookie.get('Authorization');
//       if (token) {
//         setLoading(true);
//         const cartData = await fetchCartUser();
//         if (cartData) {
//           setCartApi(cartData);
//           setError(null);
//           localStorage.setItem('cart', JSON.stringify(cartData));
//         } else {
//           setCartApi(null);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//       setError('Failed to fetch cart data');
//       setInitialLoad(false)
//     } finally {
//       setLoading(false);
//       setInitialLoad(false)

//     }
//   };

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCartApi(JSON.parse(storedCart));
//       setLoading(false);
//     } 
//     else if (initialLoad) {
//       setInitialLoad(false);
//       getCarts();
//     }
//   }, [initialLoad]);

//   const addToCartApi = async (product: string , taille:string) => {
//     try {
//       await axiosClient.post('/user/carts', { product_id: product , taille});
//      await getCarts();
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
import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback, useRef, useMemo } from 'react';
import Cookies from 'universal-cookie';

interface CartContextType {
  cartApi: CartType | null;
  addToCartApi: (product: string, taille: string) => Promise<void>;
  getCarts: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
//@ts-ignore
const fetchCartUser = async (): Promise<CartType | undefined> => {
  try {
    const res = await axiosClient.get('/user/carts');
    if (res.status === 200 || res.status === 201) {
      return res.data as CartType;
    }else if (res.status === 404) {
      throw new Error('Cart not found');
    }
  } catch (error) {
    console.error('Error fetching cart data:', error);
    throw error;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartApi, setCartApi] = useState<CartType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const requestInProgress = useRef(false); // Track ongoing requests
  const cartNotFound = useRef(false); // Track if cart is not found (404)

  const getCarts = useCallback(async () => {
    if (requestInProgress.current || cartNotFound.current) {
      return; // Skip if a request is already in progress or cart is not found
    }

    requestInProgress.current = true; // Mark request as in progress

    const cookie = new Cookies();
    const token = cookie.get('Authorization');

    if (!token) {
      setError('No authorization token found');
      setLoading(false);
      requestInProgress.current = false;
      return;
    }

    try {
      setLoading(true);
      const cartData = await fetchCartUser();
      if (cartData) {
        setCartApi(cartData);
        setError(null);
        localStorage.setItem('cart', JSON.stringify(cartData));
      } else {
        setCartApi(null);
      }
    } catch (error) {
      //@ts-ignore
      if (error.message === 'Cart not found') {
        cartNotFound.current = true; // Set cart not found flag
      }
      console.error('Error fetching cart data:', error);
      setError('Failed to fetch cart data');
    } finally {
      setLoading(false);
      requestInProgress.current = false; // Reset the flag after request completion
    }
  }, []);

  const memoizedGetCarts = useMemo(() => getCarts, [getCarts]);

  useEffect(() => {
    if (!requestInProgress.current && !cartNotFound.current) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCartApi(JSON.parse(storedCart));
        setLoading(false);
      } else {
        memoizedGetCarts();
      }
    }
  }, [memoizedGetCarts]);

  const addToCartApi = async (product: string, taille: string) => {
    if (cartNotFound.current) return; // Skip if cart is not found
    try {
      await axiosClient.post('/user/carts', { product_id: product, taille });
      await memoizedGetCarts();
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError('Failed to add item to cart');
    }
  };

  return (
    <CartContext.Provider value={{ cartApi, addToCartApi, getCarts: memoizedGetCarts, loading, error }}>
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
