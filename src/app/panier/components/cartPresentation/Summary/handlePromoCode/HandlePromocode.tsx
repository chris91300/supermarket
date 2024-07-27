'use client'

import React, { useState } from 'react'
import PromoCodeForm from './promoCodeForm/PromoCodeForm';
import PromoCodeSuccess from './promoCodeSuccess/PromoCodeSuccess';


function HandlePromocode() {
    
    const [ codeIsValidated ] = useState(false);

   
  return codeIsValidated ? <PromoCodeSuccess /> : <PromoCodeForm />;
}

export default HandlePromocode