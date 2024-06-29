'use client'

import { product } from '@/types/types';
import React from 'react'
import useSearchForTheProductInTheCart from '../../../../_hooks/global/useSearchForTheProductInTheCart';
import BubbleCount from '../../bubbleCount/BubbleCount';
import { FaShoppingCart } from "react-icons/fa";
import getProductQuantityInCart from '../../../../_utils/getProductQuantityInCart';

type Props = {
  product: product,
    click:()=>void
}




export default function ButtonAddToCart({ product, click }: Props) {
  const { productFounds } = useSearchForTheProductInTheCart(product);
  const productQuantityInCart = getProductQuantityInCart(productFounds);

  const title = productQuantityInCart > 0 ?
                `Vous en avez ${productQuantityInCart} dans votre panier` :
                "Ajouter à votre panier"


  return (
    <button className='relative' title={title} onClick={click}>
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