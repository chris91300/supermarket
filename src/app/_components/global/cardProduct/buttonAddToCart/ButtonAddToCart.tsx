'use client'

import { Product } from '@/app/_bdd/types/databasetypes';
import React from 'react'
import useSearchForTheProductInTheCart from '../../../../_hooks/global/useSearchForTheProductInTheCart';
import BubbleCount from '../../bubbleCount/BubbleCount';
import { FaShoppingCart } from "react-icons/fa";
import getProductQuantityInCart from '../../../../_utils/getProductQuantityInCart';


type Props = {
  product: Product,
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