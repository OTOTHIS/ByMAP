"use client"
import { axiosClient } from '@/components/axios/axios';
import { UserType } from '@/data/types';
import React, { createContext, useContext, useEffect, useState, ReactNode, FC } from 'react';

// Define the shape of the context value
interface UserContextType {
  userApi?: UserType;
  setUserApi: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  getUser: () => void;
}

// Create the context with a default value of undefined
const UserContext = createContext<UserContextType | undefined>(undefined);

// Function to fetch user data
//@ts-ignore
const fetchUser = async (): Promise<UserType | undefined> => {
  try {
    const res = await axiosClient.get('/user');
    return res.data;
  } catch (error) {
    console.error(error);
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

  return (
    <UserContext.Provider value={{ userApi, setUserApi, getUser }}>
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
