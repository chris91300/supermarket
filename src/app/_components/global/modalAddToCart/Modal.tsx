'use client'

import React from 'react'
import useDataForForm from './hooks/useDataForForm'
import Form from './components/Form'
import { product } from '@/types/types'

type Props = {
    product: product,
    visible: boolean
} 

export default function Modal({product, visible}: Props) {
    const { alreadyInCart, defaultQuantity, submitFunction } = useDataForForm(product);
    
  return (    
    visible && 
    <>
        <div className='absolute top-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-70'>
            <Form 
                product={product}
                defaultQuantity={ defaultQuantity }
                alreadyInCart={ alreadyInCart }
                submitFunction={ submitFunction }
            />
        </div>
    </>    
  )
}