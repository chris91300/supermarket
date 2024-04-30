import React from 'react'

export type LabelInputsTypesProps = {
    name: string,
    packaging: string,
    quantity: number,
    price: number,
    handleChange: (e: React.FormEvent<HTMLInputElement>)=>void
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
    <div className='flex items-center'>
        <div className='flex items-center justify-between grow pr-2'>
          <label htmlFor="quantity" className='flex flex-col'>
              <span className='font-bold'>{name}</span>
              <span className='text-xs text-violet'>{packaging}</span>
          </label>
          <p>{priceFormatted} x</p>
        </div>
        <input className='w-12 border border-black rounded-lg pl-2' type="number" name='quantity' min="0" value={ quantity } onChange={handleChange}/>
    </div>
  )
}

