'use client'

import React from 'react'
import Form from './components/Form'
import { product } from '@/types/types'
import ModalContainer from '../modalContainer/ModalContainer'
import useDataForFormAddToCart from '@/app/_hooks/global/useDataForFormAddToCart'

type Props = {
    product: product,
    visible: boolean
} 

export default function Modal({product, visible}: Props) {
    const { alreadyInCart, defaultQuantity, submitFunction } = useDataForFormAddToCart(product);
    
  return (    
    visible && 
    <>
        <ModalContainer>
            <Form 
                product={product}
                defaultQuantity={ defaultQuantity }
                alreadyInCart={ alreadyInCart }
                submitFunction={ submitFunction }
            />
        </ModalContainer>
    </>    
  )
}