'use client'
import React from 'react'
import TotalPrice from './totalPrice/TotalPrice'
import ValidateCommande from './validateCommande/ValidateCommande'
import PromoCodeForm from './handlePromoCode/promoCodeForm/PromoCodeForm'
import PromoCodeSuccess from './handlePromoCode/promoCodeSuccess/PromoCodeSuccess'
import usePromoCode from '@/app/_hooks/forPromoCode/usePromoCode'



type Props = {}

function Summary({}: Props) {
  
  const promoCodeIsValid = usePromoCode();

  return (
    <div className='flex flex-col gap-4 w-52 bg-white py-4'>
      <TotalPrice />
      { promoCodeIsValid ? <PromoCodeSuccess /> : <PromoCodeForm /> }
      <ValidateCommande />
    </div>
  )
}

export default Summary