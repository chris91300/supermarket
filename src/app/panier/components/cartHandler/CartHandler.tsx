"use client"

import { useCart } from '@/app/_hooks/hooks'
import arrayIsEmpty from '@/app/_utils/arrayIsEmpty';
import React from 'react'
import EmptyCart from '../emptyCart/EmptyCart';
import Cart from '../cart/Cart';

type Props = {}

function CartHandler({}: Props) {
    const cart = useCart();

    const content = arrayIsEmpty(cart.length)? <EmptyCart /> : <Cart cart={ cart } />
  return (
    <div>{ content }</div>
    
  )
}

export default CartHandler