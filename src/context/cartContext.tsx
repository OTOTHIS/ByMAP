"use client"
// import { axiosClient } from '@/components/axios/axios';
// import { CartType } from '@/data/types';
// import React, { createContext, useContext, useEffect, useState } from 'react';
// //@ts-ignore
// const CartContext = createContext();

// const fetchCartUser = async () => {
//   const res = await axiosClient.get('/user/carts');
//   return res.data;
// };



// //@ts-ignore
// export const CartProvider = ({ children }) => {

//   const [cartApi, setCartApi] = useState<CartType>();

//    const getCarts = () => {
//     fetchCartUser().then(setCartApi).catch(console.error);
//   }
//   useEffect(() => {
//     getCarts()
//   }, []);
  

//   //@ts-ignore
//   const addToCartApi = async (product) => {
//     try {
//       await axiosClient.post('/user/carts', { product_id : product });
//       getCarts();
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       // Handle error appropriately
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cartApi, addToCartApi , getCarts }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);











// import { axiosClient } from '@/components/axios/axios';
// import { CartType } from '@/data/types';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// interface CartContextType {
//   cartApi: CartType;
//   addToCartApi: (product: string) => Promise<void>;
//   getCarts: () => Promise<void>;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// const fetchCartUser = async () => {
//   const res = await axiosClient.get('/user/carts');
//   return res.data as CartType;
// };

// export const CartProvider: React.FC = ({ children }:any) => {
//   const [cartApi, setCartApi] = useState<CartType>();

//   const getCarts = async () => {
//     try {
//       const cartData = await fetchCartUser();
//       setCartApi(cartData);
//     } catch (error) {
//       console.error('Error fetching cart data:', error);
//     }
//   };

//   useEffect(() => {
//     getCarts(); // Call getCarts once the component mounts
//   }, []);


//   const addToCartApi = async (product: string) => {
//     try {
//       await axiosClient.post('/user/carts', { product_id: product });
//       // After adding to cart, fetch updated cart data
//       await getCarts();
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       // Handle error appropriately
//     }
//   };

//   useEffect(() => {
//     getCarts();
//   }, []);

//   return (
//     //@ts-ignore
//     <CartContext.Provider value={{ cartApi, addToCartApi, getCarts }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };












import { axiosClient } from '@/components/axios/axios';
import { CartType } from '@/data/types';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface CartContextType {
  cartApi: CartType | null;
  addToCartApi: (product: string) => Promise<void>;
  getCarts: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const fetchCartUser = async (): Promise<CartType> => {
  const res = await axiosClient.get('/user/carts');
  return res.data as CartType;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartApi, setCartApi] = useState<CartType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCarts = async () => {
    try {
      setLoading(true);
      const cartData = await fetchCartUser();
      setCartApi(cartData);
      setError(null);
      localStorage.setItem('cart', JSON.stringify(cartData));
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
    } else {
      getCarts();
    }
  }, []);

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
