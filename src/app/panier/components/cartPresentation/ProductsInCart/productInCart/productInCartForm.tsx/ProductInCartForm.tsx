import NumberInput from '@/app/_components/global/labelAndInput/numberInput/NumberInput';
import { product } from '@/types/types'

import React from 'react'

type Props = {
    product: product,
    quantity: number,
    handleChange: (value: number) => void,
    updateQuantity: (e: React.MouseEvent<unknown, MouseEvent>) => void,
    deleteProduct: ()=> void
}

function ProductInCartForm({product, quantity, handleChange, updateQuantity, deleteProduct}: Props) {

    const { name, packaging, price } = product;

  return (
    <form className='grow px-4 flex flex-col gap-2'>
            <label htmlFor='productChoosenQuantity'>
                <p>{ name }</p>
                <p className='text-xs'>{ `( ${packaging} - ${price.toFixed(2)}€ )` }</p>
            </label>
            <div className='flex gap-3'>
            <NumberInput onChange={handleChange} defaultValue={quantity} />
                <button type='submit' className='text-violet text-sm' onClick={updateQuantity}>modifier</button>
                <button type='submit' className='text-violet text-sm' onClick={deleteProduct}>supprimer</button>
            </div>   

        </form>
  )
}

export default ProductInCartForm