"use client"

import React from 'react'
import EmptyCart from '../emptyCart/EmptyCart';
import Cart from '../cart/Cart';
import useCart from '@/app/_hooks/forCart/useCart';
import { isEmpty } from 'ramda';



function CartHandler() {

    const cart = useCart();
    const content = isEmpty(cart)? <EmptyCart /> : <Cart />
    
  return (
    <div>{ content }</div>
    
  )
}

export default CartHandler