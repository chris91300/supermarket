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
    

    /**
     * a voir par la suite => si le product est dans le panier alors récup la quantity et 
     *  A : la submit function sera changeProductQuantity payload => id et quantity
     *      sinon faire comme là
     *  B : afficher la bonner quantité dans le input
     *  C : dans CardProduct ajouter une bulle au niveau du cartIcon qui affiche la quantité de cette article mis dans le panier
     */

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