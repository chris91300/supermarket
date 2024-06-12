'use client'

import React from 'react'
import { useNavigateTo, usePromoCode, useValidateTheOrder } from '@/app/_hooks/hooks';

type Props = {}

function ValidateCommande({}: Props) {

  const validateTheOrder = useValidateTheOrder();
  const promoCodeIsValide = usePromoCode();
  const navigateTo = useNavigateTo();
  const path = promoCodeIsValide ? "/commande_valide" : "/astuce";

  const validateOrder = () => { 
    validateTheOrder();
    navigateTo(path);
  }

  return (
    <button
    onClick={validateOrder}
      title='Cliquer pour valider votre panier'
      className='rounded-2xl px-4 py-1 border border-green-500 text-green-500 hover:text-white hover:bg-green-500 duration-300 transition-all m-auto'
    >
      Passer commande
    </button>
    
  )
}

export default ValidateCommande