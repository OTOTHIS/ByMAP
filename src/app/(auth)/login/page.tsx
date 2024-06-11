"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import loginAction from './loginAction';
import { useUser } from '@/context/userContext';
import { UserType } from '@/data/types';

const formSchema = z.object({
  email: z.string().email().min(2).max(30),
  password: z.string().min(8).max(30),
});

const PageLogin = () => {
  const router = useRouter();
const {setUserApi} = useUser()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });
  const [redirectUrl, setRedirectUrl] = useState('/');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const redirect = queryParams.get('redirect');
    if (redirect) {
      setRedirectUrl(redirect);
    }
  }, []);


  const onSubmit = async (values: any) => {
    try {
      console.log(values)
      const user:UserType = await loginAction(values.email, values.password);
        setUserApi(user)
     
        if(user.role == 'user'){
          // router.push("/user");
          router.push(redirectUrl);
        }else{
          router.push("/register");
        }
    } catch (error) {
      // Handle login error
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="nc-PageLogin" data-nc-id="PageLogin">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Login
        </h2>
        <div className="mx-auto max-w-md">
          <div className="space-y-6">
            <div>
              <ButtonSecondary className="flex w-full items-center gap-3 border-2 border-primary text-primary">
                <FaGoogle className="text-2xl" /> Continue with Google
              </ButtonSecondary>
            </div>
            <div className="relative text-center">
              <span className="relative z-10 inline-block rounded-full bg-gray px-4 text-sm font-medium">
                OR
              </span>
              <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-neutral-300" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div className="grid gap-6">
                <FormItem label="Email address">
                  <Input
                    {...register("email")}
                    type="email"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="example@example.com"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  {errors.email && (
                    //@ts-ignore
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </FormItem>
                <FormItem label="Password">
                  <Input
                    {...register("password")}
                    type="password"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  {errors.password && (
                   //@ts-ignore
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                  )}
                </FormItem>
                <ButtonPrimary type="submit">Continue</ButtonPrimary>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Link href="/forgot-pass" className="text-sm text-primary">
                  Forgot password
                </Link>
                <span className="block text-center text-sm text-neutral-500">
                  Don&apos;t have an account? {` `}
                  <Link href="/signup" className="text-primary">
                    Signup
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
