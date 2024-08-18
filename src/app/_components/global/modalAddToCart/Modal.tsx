'use client'

import React from 'react'
import Form from './components/Form'
import ModalContainer from '../modalContainer/ModalContainer'
import useDataForFormAddToCart from '@/app/_hooks/global/useDataForFormAddToCart'
import { Product } from '@/app/_bdd/types/databasetypes'

type Props = {
    product: Product,
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