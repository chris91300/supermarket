'use client'

import useCart from '@/app/_hooks/forCart/useCart';
import usePromoCode from '@/app/_hooks/forPromoCode/usePromoCode';
import getTotalPrice from '@/app/_utils/getTotalPrice';
import getTotalQuantityOfProductInCart from '@/app/_utils/getTotalQuantityOfProductInCart';
import React from 'react'

type Props = {}

function TotalPrice({}: Props) {

    const cart = useCart();
    const promoCodeIsValid = usePromoCode();
    const totalQuantityOfArticlesInCart = getTotalQuantityOfProductInCart(cart);
    const totalPrice = getTotalPrice(cart);
    const totalPriceFormatted = `${totalPrice.toFixed(2)}€`;

  return (
    <div>
        <h2 className='text-center font-bold'>TOTAL</h2>
        <p className='text-center font-bold'>de vos achats</p>
        <p className='text-center'>
            nombre d'article : 
            <span className='font-bold ml-2'>{ totalQuantityOfArticlesInCart }</span>        
        </p>
        <p className={ `text-center ${promoCodeIsValid && 'line-through'}` }>
            TOTAL : 
            <span className="font-bold ml-2">{ totalPriceFormatted }</span>        
        </p>
        { promoCodeIsValid && 
          <p className="text-center">
            TOTAL : 
            <span className="font-bold ml-2">0.00€</span>        
      </p>
        }
    </div>
  )
}

export default TotalPrice