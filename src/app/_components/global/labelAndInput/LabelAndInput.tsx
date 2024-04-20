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
        <label htmlFor="quantity" className='flex flex-col'>
            <span>{name}</span>
            <span className='text-xs text-violet'>{packaging}</span>
        </label>
        <input className='w-12 border border-black rounded-lg pl-2' type="number" name='quantity' min="0" value={ quantity } onChange={handleChange}/>
    </div>
  )
}

