'use client';

import type { FC } from 'react';
import React, { useState } from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import Radio from '@/shared/Radio/Radio';
import Select from '@/shared/Select/Select';
import { axiosClient } from '@/components/axios/axios';
import { useUser } from '@/context/userContext';

interface Props {
  isActive: boolean;
  onCloseActive: () => void;
  onOpenActive: () => void;
}

const ShippingAddress: FC<Props> = ({
  isActive,
  onCloseActive,
  onOpenActive,
}) => {
   // State to store form field values
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    state: '',
    postalCode: '',
    addressType: '',
  });
const {userApi} = useUser()
  // Function to handle changes in input fields and update state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle changes in select field and update state
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to log form field values to the console
  const logFormData = async() => {
  try {
    const response = await axiosClient.put('/user',formData)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  };

  return (
    <div className="rounded-xl border border-neutral-300 ">
      <div className="flex flex-col items-start p-6 sm:flex-row">
        <span className="hidden sm:block">
          <TbTruckDelivery className="text-3xl text-primary" />
        </span>

        <div className="flex w-full items-center justify-between">
          <div className="sm:ml-8">
            <span className="uppercase">SHIPPING ADDRESS</span>
            <div className="mt-1 text-sm font-semibold">
              <span className="">
                1234 Main Street, Apt 567, Cityville, State
              </span>
            </div>
          </div>
          <ButtonSecondary
            sizeClass="py-2 px-4"
            className="border-2 border-primary text-primary"
            onClick={onOpenActive}
          >
            Edit
          </ButtonSecondary>
        </div>
      </div>
      <div
        className={`space-y-4 border-t border-neutral-300 px-6 py-7 sm:space-y-6 ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="First name">
              <Input
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue={userApi?.firstname}
               onChange={handleInputChange}
               name='firstname'
              />
            </FormItem>
          </div>
          <div>
            <FormItem label="Last name">
              <Input
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue={userApi?.lastname}
                onChange={handleInputChange}
                name='lastname'
              />
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="space-y-4 sm:flex sm:space-x-3 sm:space-y-0">
          <div className="flex-1">
            <FormItem label="Address">
              <Input
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                placeholder=""
                defaultValue={userApi?.adresse}
                onChange={handleInputChange}
                name='adresse'
                type="text"
              />
            </FormItem>
          </div>
          
        </div>

        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="City">
              <Input
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue={userApi?.city}
                onChange={handleInputChange}
                name='city'
              />
            </FormItem>
          </div>
          <div>
            <FormItem label="Country">
              <Select
                sizeClass="h-12 px-4 py-3"
                className="rounded-lg border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue={userApi?.country}
                onChange={handleSelectChange}
                name='country'

              >
                <option value="United States">United States</option>
                <option value="United States">Canada</option>
                <option value="United States">Mexico</option>
                <option value="United States">Israel</option>
                <option value="United States">France</option>
                <option value="United States">England</option>
                <option value="United States">Laos</option>
                <option value="United States">China</option>
              </Select>
            </FormItem>
          </div>
        </div>

        {/* ============ */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3">
          <div>
            <FormItem label="State/Province">
              <Input
                rounded="rounded-lg"
                sizeClass="h-12 px-4 py-3"
                className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                defaultValue={userApi?.state}
                onChange={handleInputChange}
                name='state'

              />
            </FormItem>
          </div>
        </div>
        <div>
          <FormItem label="Postal code">
            <Input
              rounded="rounded-lg"
              sizeClass="h-12 px-4 py-3"
              className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
              defaultValue={userApi?.postalcode}
              onChange={handleInputChange}
              name='postalcode'
            />
          </FormItem>
        </div>
      </div>

      {/* ============ */}
      <div className="px-6">
      <FormItem label="Address type">
  <div className="mt-1.5 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
    <Radio
      label="Home(All Day Delivery)"
      id="Address-type-home"
      name="Address-type"
      defaultChecked={userApi?.adresseType === 'Home'}
    />
    <Radio
      label="Office(Delivery 9 AM - 5 PM)"
      id="Address-type-office"
      name="Address-type"
      defaultChecked={userApi?.adresseType === 'Office'} 
    />
  </div>
</FormItem>
      </div>

      {/* ============ */}
      <div className="flex flex-col p-6 sm:flex-row">
        <ButtonPrimary className="shadow-none sm:!px-7"  onClick={()=>{
          onCloseActive()
          logFormData()

        }}>
          Save and go to Payment
        </ButtonPrimary>
        <ButtonSecondary
          className="mt-3 sm:ml-3 sm:mt-0"
          onClick={onCloseActive}
        >
          Cancel
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default ShippingAddress;
