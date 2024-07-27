'use client'

import React from 'react'
import OrderPage from './OrderPage'
import RedirectIfNotAllow from '../_components/global/redirectIfNotAllow/RedirectIfNotAllow'
import { useOrderIsValid } from '../_hooks/global/useOrderIsValid'


export default function CommandeValide() {
  
  return (
    <RedirectIfNotAllow shouldBeTrueToBeSecure={useOrderIsValid}>
      <OrderPage />
    </RedirectIfNotAllow>
    
  )
}
