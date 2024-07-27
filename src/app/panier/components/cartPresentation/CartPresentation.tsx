import React from 'react'
import ProductsInCart from './ProductsInCart/ProductsInCart'
import Summary from './Summary/Summary'
import Head from '../head/Head'


function CartPresentation() {
   
  return (
    <div className='flex flex-col md:flex-row gap-4 w-full'>
      <div className='flex flex-col grow'>
        <Head />      
        <ProductsInCart />        
      </div>
      <Summary />
    </div>    
  )
}

export default CartPresentation