'use client'

import React, { useState } from 'react'
import PromoCodeForm from './promoCodeForm/PromoCodeForm';
import PromoCodeSuccess from './promoCodeSuccess/PromoCodeSuccess';

type Props = {}

function HandlePromocode({}: Props) {
    
    const [ codeIsValidated, setCodeIsValidated ] = useState(false);

   
  return codeIsValidated ? <PromoCodeSuccess /> : <PromoCodeForm setCodeIsValidated={setCodeIsValidated}/>;
}

export default HandlePromocode