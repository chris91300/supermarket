'use client'

import React from 'react'
import Link from 'next/link'
import Animation from './animation/Animation'
import useEmptyTheCartWhenComponentIsRender from '../_hooks/global/useEmptyTheCartWhenComponentIsRender'
import useResetOrderAndPromoCodeWhenComponentIsUnmount from '../_hooks/global/useResetOrderAndPromoCodeWhenComponentIsUnmount'


export default function OrderPage() {
  useEmptyTheCartWhenComponentIsRender();
  useResetOrderAndPromoCodeWhenComponentIsUnmount();
  

  return (
    <>
        <h1><span className='text-violet font-bold'>MERCI</span> pour votre commande</h1>
        <p>Elle roule déjà vers vous</p>
        <Animation />
        <Link href="/" className='text-violet'>Retour aux courses</Link>
    </>
  )
}