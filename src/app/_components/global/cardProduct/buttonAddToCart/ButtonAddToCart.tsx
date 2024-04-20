'use client'

import { product } from '@/types/types';
import React from 'react'
import useSearchForTheProductInTheCart from '../../modal/hooks/useSearchForTheProductInTheCart';
import { productChoosen } from '@/types/types';
import BubbleCount from '../../bubbleCount/BubbleCount';
import { FaShoppingCart } from "react-icons/fa";
import { getQuantity } from '@/app/_utils/getQuantity';

type Props = {
  product: product,
    click:()=>void
}

function getProductQuantityInCart(productsFound: productChoosen[]){
  if(productsFound.length > 0){
    const productChoosen = productsFound[0];
    return getQuantity(productChoosen)
  } else {
    return 0
  }
}


export default function ButtonAddToCart({ product, click }: Props) {
  const { productFounds } = useSearchForTheProductInTheCart(product);
  const productQuantityInCart = getProductQuantityInCart(productFounds)


  return (
    <button className='relative' title="ajouter à votre panier" onClick={click}>
      {
        productQuantityInCart > 0 &&
        <BubbleCount
          className='w-4 h-4 text-white text-xs bg-black'
          count={productQuantityInCart}
        />
      }
        <FaShoppingCart size={ 20 } />
    </button>
  )
}