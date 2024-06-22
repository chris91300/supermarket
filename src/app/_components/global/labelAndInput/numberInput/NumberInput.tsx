'use client'

import { dec, gt, inc, pipe, test } from 'ramda';
import React, { useState } from 'react'
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

type Props = {
    onChange: (value: number) => void,
    defaultValue: number
}

function NumberInput({defaultValue, onChange}: Props) {
    const [value, setValue] = useState(defaultValue);

    const updateValue = (value: number) => {
        setValue(Number(value));
        onChange(value)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        test(/^(\d)*$/, value) && updateValue(Number(value))
    }

    const increment = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        pipe(inc, updateValue)(value);
    }

    const decrement = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        gt(value, 0) && pipe(dec, updateValue)(value);
    }

  return (
    <div className='flex justify-center border border-black rounded-lg pl-2'>
        <input type="text" onChange={ handleChange } value={value} name="quantité" className='w-12 pl-2 '/>
        <div className='flex flex-col'>
            <button onClick={increment} className='text-green-500' aria-label="ajouter 1 à la quantité">
                <FaRegSquarePlus size={25}/>
            </button>
            <button  onClick={decrement} className='text-red-500' aria-label="retirer 1 à la quantité">
                <FaRegSquareMinus  size={25}/>
            </button>        
        </div>
    </div>
  )
}

export default NumberInput