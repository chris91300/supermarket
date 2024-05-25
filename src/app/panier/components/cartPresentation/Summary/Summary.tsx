'use client'
import React, { useState } from 'react'
import TotalPrice from './totalPrice/TotalPrice'
import ValidateCommande from './validateCommande/ValidateCommande'
import PromoCodeForm from './handlePromoCode/promoCodeForm/PromoCodeForm'
import PromoCodeSuccess from './handlePromoCode/promoCodeSuccess/PromoCodeSuccess'
type Props = {}

function Summary({}: Props) {
  
  const [ codeIsValidated, setCodeIsValidated ] = useState(false);

  return (
    <div className='flex flex-col gap-4 w-52 bg-white py-4'>
      <TotalPrice />
      { codeIsValidated ? <PromoCodeSuccess /> : <PromoCodeForm setCodeIsValidated={setCodeIsValidated}/> }
      <ValidateCommande codeIsValidated={ codeIsValidated }/>
    </div>
  )
}

export default Summary