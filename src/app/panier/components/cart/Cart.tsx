import { cartTypes, product, productChoosen } from '@/types/types'
import Link from 'next/link'
import { map } from 'ramda'
import React from 'react'
import ProductInCart from '../cartPresentation/ProductsInCart/productInCart/ProductInCart'
import { nanoid } from '@reduxjs/toolkit'
import CartPresentation from '../cartPresentation/CartPresentation'

type Props = {
    cart: cartTypes
}

function Cart({ cart }: Props) {
  return (
    <div>
        <Link href={"/"} className='text-violet'>
            Continuer mes courses
        </Link>
        <CartPresentation />
    </div>
  )
}

export default Cart