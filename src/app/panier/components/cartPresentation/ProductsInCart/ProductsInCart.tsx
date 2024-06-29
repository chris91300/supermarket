'use client'

import { productChoosen } from '@/types/types';
import { map } from 'ramda';
import React from 'react'
import ProductInCart from './productInCart/ProductInCart';
import { nanoid } from '@reduxjs/toolkit';
import useCart from '@/app/_hooks/forCart/useCart';

type Props = {}

function ProductsInCart({}: Props) {
  const cart = useCart();
  return (
    <div className='grow'>
      {
            map((productChoosen: productChoosen) => <ProductInCart key={nanoid()} productChoosen={productChoosen} />, cart)
        }
    </div>
  )
}

export default ProductsInCart