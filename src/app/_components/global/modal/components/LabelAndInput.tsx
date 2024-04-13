import React from 'react'

type Props = {
    name: string,
    packaging: string,
    quantity: number,
    handleChange: (e: React.FormEvent<HTMLInputElement>)=>void
}

export default function LabelAndInput({
    name,
    packaging,
    quantity,
    handleChange
}: Props) {
  return (
    <div className='flex items-center justify-between'>
        <label htmlFor="quantity">
            <span className='block'>{name}</span>
            <span className='text-xs'>{packaging}</span>
        </label>
        <input className='w-12 border border-black rounded-lg pl-2' type="number" name='quantity' min="0" value={ quantity } onChange={handleChange}/>
    </div>
  )
}

