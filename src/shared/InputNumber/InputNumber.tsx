'use client';

import { axiosClient } from '@/components/axios/axios';
import { useCart } from '@/context/cartContext';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';

export interface InputNumberProps {
  className?: string;
  itemId: number;
  qte?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  label?: string;
  desc?: string;
}

const InputNumber: FC<InputNumberProps> = ({
  className = 'w-full',
  qte,
  defaultValue = qte,
  min = 1,
  max = 99,
  onChange,
  label,
  desc,
  itemId,
}) => {
  const [value, setValue] = useState(defaultValue);
  const { getCarts } = useCart();

  const handleQte = async (newQuantity: number) => {
    try {
      const response = await axiosClient.put(`/user/carts/${itemId}`, { new_quantity: newQuantity });
      if (response.status >= 200 && response.status < 204) {
        alert('Quantity updated');
        getCarts(); // Refresh the cart data after updating
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleClickDecrement = () => {
    //@ts-ignore
    if (min >= value) return;
        //@ts-ignore
    const newValue = value - 1;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
    handleQte(newValue);
  };

  const handleClickIncrement = () => {
        //@ts-ignore
    if (max && max <= value) return;
        //@ts-ignore
    const newValue = value + 1;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
    handleQte(newValue);
  };

  const renderLabel = () => {
    return (
      <div className="flex flex-col">
        <span className="font-medium">{label}</span>
        {desc && <span className="text-xs font-normal text-neutral-500">{desc}</span>}
      </div>
    );
  };

  return (
    <div className={`nc-InputNumber flex items-center justify-between space-x-5 ${className}`}>
      {label && renderLabel()}

      <div className="nc-NcInputNumber__content flex w-[104px] items-center justify-between sm:w-28">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-xl hover:border-neutral-700 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:border-neutral-400"
          type="button"
          onClick={handleClickDecrement}
              //@ts-ignore
          disabled={min >= value}
        >
          -
        </button>
        <span className="block flex-1 select-none text-center leading-none">{value}</span>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-xl hover:border-neutral-700 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:border-neutral-400"
          type="button"
          onClick={handleClickIncrement}
              //@ts-ignore
          disabled={max ? max <= value : false}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
