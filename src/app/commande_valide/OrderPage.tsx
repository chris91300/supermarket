'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import Animation from './animation/Animation'
import { useEmptyTheCart, useResetOrder, useResetPromoCode } from '../_hooks/hooks'

type Props = {}

export default function OrderPage({}: Props) {
  
  const resetOrder = useResetOrder();
  const resetPromoCode = useResetPromoCode();
  const emptyTheCart = useEmptyTheCart();

  useEffect(() => {
    emptyTheCart();

    return () =>{
      resetOrder()
      resetPromoCode()

    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col py-10 items-center">
        <h1><span className='text-violet font-bold'>MERCI</span> pour votre commande</h1>
        <p>Elle roule déjà vers vous</p>
        <Animation />
        <Link href="/" className='text-violet'>Retour aux courses</Link>
    </main>
  )
}