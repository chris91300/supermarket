'use client'

import React from 'react'
import { useOrderIsValid } from '../_hooks/hooks'
import OrderPage from './OrderPage'
import RedirectIfNotAllow from '../_components/global/redirectIfNotAllow/RedirectIfNotAllow'


export default function CommandeValide() {
  return (
    <RedirectIfNotAllow shouldBeTrueToBeSecure={useOrderIsValid}>
      <OrderPage />
    </RedirectIfNotAllow>
    
  )
}
