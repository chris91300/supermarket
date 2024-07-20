"use client"

//import arrayIsEmpty from '@/app/_utils/arrayIsEmpty';
import React from 'react'
import EmptyCart from '../emptyCart/EmptyCart';
import Cart from '../cart/Cart';
import useCart from '@/app/_hooks/forCart/useCart';
import { isEmpty } from 'ramda';

type Props = {}

function CartHandler({}: Props) {

    const cart = useCart();
    const content = isEmpty(cart)? <EmptyCart /> : <Cart cart={ cart } />
    
  return (
    <div>{ content }</div>
    
  )
}

export default CartHandler