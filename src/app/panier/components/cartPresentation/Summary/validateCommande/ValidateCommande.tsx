'use client'

import React from 'react'
import { useEmptyTheCart, useNavigateTo, usePromoCode, useValidateTheOrder } from '@/app/_hooks/hooks';

type Props = {}
// essayer de voir pourquoi le cart se vide quand on va direct sur /commande_valide
function ValidateCommande({}: Props) {

  const validateTheOrder = useValidateTheOrder();
  const promoCodeIsValide = usePromoCode();
  const emptyTheCart = useEmptyTheCart();
  const navigateTo = useNavigateTo();
  const path = promoCodeIsValide ? "/commande_valide" : "/astuce";

  const validateOrder = () => { 
    validateTheOrder();
    promoCodeIsValide && emptyTheCart();
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