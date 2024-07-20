import React from 'react'
import NumberInput from './numberInput/NumberInput';

export type LabelInputsTypesProps = {
    name: string,
    packaging: string,
    quantity: number,
    price: number,
    handleChange: (value: number)=>void
}

export default function LabelAndInput({
    name,
    packaging,
    quantity,
    price,
    handleChange
}: LabelInputsTypesProps) {
  
  const priceFormatted = `${price}€`;
  
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-between grow pr-2'>
        <label htmlFor="quantity" className='flex flex-col text-center'>
            <span className='font-bold'>{name}</span>
            <span className='text-xs text-violet'>{packaging}</span>
        </label>
        
      </div>
    <div className='flex justify-center items-center gap-2 my-3'>
      <p>{priceFormatted} x</p>
      <NumberInput onChange={handleChange} defaultValue={quantity} />
    </div>
        
    </div>
  )
}

