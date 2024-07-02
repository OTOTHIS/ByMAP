"use client"
import { axiosClient } from '@/components/axios/axios';
import { UserType } from '@/data/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from 'react';
import Cookies from 'universal-cookie';
// Define the shape of the context value
interface UserContextType {
  userApi?: UserType;
  setUserApi: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  getUser: () => void;
  logout:()=>void
}

// Create the context with a default value of undefined
const UserContext = createContext<UserContextType | undefined>(undefined);
const cookie = new Cookies()
// Function to fetch user data
//@ts-ignore
// const fetchUser = async (): Promise<UserType | undefined> => {
//   try {
//     const res = await axiosClient.get('/user');
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const fetchUser = async (): Promise<UserType | undefined> => {
  try {
    const res = await axiosClient.get('/user');
    return res.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      // Unauthorized, remove cookie and role
      cookie.remove('Authorization'); // Adjust the cookie name as needed
      cookie.remove('userRole'); // Adjust the role cookie name as needed
      localStorage.removeItem('cart')

      // Optionally, you can also handle any additional state management here
      console.log('User is not authenticated. Cookies and roles removed.');
    } else {
      console.error(error);
    }
  }
};

// Props type for the UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

// UserProvider component
export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [userApi, setUserApi] = useState<UserType>();
  const getUser = () => {
    fetchUser().then(setUserApi).catch(console.error);
  };

  useEffect(() => {
    fetchUser().then(setUserApi).catch(console.error);
  }, []);

  const logout = async () => {
    const router = useRouter();
    const cookie = new Cookies();
  
    try {
      const token = cookie.get('Authorization');
      const link = process.env.NEXT_PUBLIC_LARAVEL_BACKEND_URL 

      if (token) {
        await axios.post(`${link}/logout`, null, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
  
      localStorage.removeItem('cart');
      cookie.remove('Authorization');
      cookie.remove('userRole');
  
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  

  
  return (
    <UserContext.Provider value={{ userApi, setUserApi, getUser , logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};