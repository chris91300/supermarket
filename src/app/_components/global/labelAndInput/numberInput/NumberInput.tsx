'use client'

import changeEventApply from '@/app/_utils/changeEventApply';
import clickEventApplyWithValue from '@/app/_utils/clickEventApplyWithValue';
import isNumber from '@/app/_utils/isNumber';
import { dec, gt, inc, pipe } from 'ramda';
import React, { useState } from 'react'
import { FaRegSquarePlus, FaRegSquareMinus } from "react-icons/fa6";

type Props = {
    onChange: (value: number) => void,
    defaultValue: number
}

function NumberInput({defaultValue, onChange}: Props) {
    const [value, setValue] = useState(defaultValue);

    const updateValue = (value: number) => {
        setValue(value);
        onChange(value)
    }

    const testAndUpdateValue = (value: string) => isNumber(value) && updateValue(Number(value));
    const changeValue = changeEventApply(testAndUpdateValue);
    
    const incrementValue = pipe(inc, updateValue);
    const increment = clickEventApplyWithValue<HTMLButtonElement, number>(incrementValue, value);
   
    const decrementIfGt0 = (value: number) => gt(value, 0) && pipe(dec, updateValue)(value);
    const decrement = clickEventApplyWithValue<HTMLButtonElement, number>(decrementIfGt0, value);
    

  return (
    <div className='flex justify-center border border-black rounded-lg pl-2'>
        <input type="text" onChange={ changeValue } value={value} name="quantité" className='w-12 pl-2 '/>
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