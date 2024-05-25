import React from 'react'
import ProductsInCart from './ProductsInCart/ProductsInCart'
import Summary from './Summary/Summary'
import Head from '../head/Head'

type Props = {}

function CartPresentation({}: Props) {
    //  FAUT CONTINUER L'INTEGRATION DU CART
  return (
    <div className='flex gap-4 w-full'>
      <div className='flex flex-col px-2 grow'>
        <Head />      
        <ProductsInCart />        
      </div>
      <Summary />
    </div>    
  )
}

export default CartPresentation