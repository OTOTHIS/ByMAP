"use client"
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import registerAction, { registerForm } from './registerAction';

const formSchema = z.object({
  email: z.string().email().min(10).max(30),
  password: z.string().min(8).max(30),
  firstname:z.string().min(10).max(30),
  lastname:z.string().min(10).max(30),
  tel:z.string().min(10).max(30),
  password_confirmation:z.string().min(8).max(30),
});


const PageRegister = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: registerForm):Promise<any> => {
    try {
      const role = await registerAction(values);
      switch (role) {
        case "user":
          router.push("/login");
          break;
        default:
          router.push("/");
          break;
      }
    } catch (error) {
      // Handle login error
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="nc-PageLogin" data-nc-id="PageRegister">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Sing Up
        </h2>
        <div className="mx-auto max-w-md">
          <div className="space-y-6">
         
           
            <form onSubmit={
              //@ts-ignore
              handleSubmit(onSubmit)
              
              } method="post">
              <div className="grid gap-6">
              <FormItem label="Nom">
                  <Input
                    {...register("firstname")}
                    type="text"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="Nom"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  {errors.name && (
                    //@ts-ignore
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </FormItem>
                <FormItem label="Prenom">
                  <Input
                    {...register("lastname")}
                    type="text"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="Prenom"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  {errors.name && (
                    //@ts-ignore
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </FormItem>
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
                <FormItem label="Telephone">
                  <Input
                    {...register("tel")}
                    type="text"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="example@example.com"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  {errors.tel && (
                    //@ts-ignore
                    <span className="text-red-500 text-sm">{errors.tel.message}</span>
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
                <FormItem label="password confirmation">
                  <Input
                    {...register("password_confirmation")}
                    type="password"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  {errors.password_confirmation && (
                   //@ts-ignore
                    <span className="text-red-500 text-sm">{errors.password_confirmation.message}</span>
                  )}
                </FormItem>

                
                <ButtonPrimary type="submit">Continue</ButtonPrimary>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Link href="/forgot-pass" className="text-sm text-primary">
                  Forgot password
                </Link>
                <span className="block text-center text-sm text-neutral-500">
                   already connected ? {` `}
                  <Link href="/login" className="text-primary">
                    Login
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

export default PageRegister;
