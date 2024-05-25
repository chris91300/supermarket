import Link from 'next/link'
import React from 'react'

type Props = {
  codeIsValidated: boolean
}

function ValidateCommande({ codeIsValidated }: Props) {

  const href = codeIsValidated ? "commande_valide" : "/astuce";

  return (
    <Link
      href={ href }
      title='Cliquer pour valider votre panier'
      className='rounded-2xl px-4 py-1 border border-green-500 text-green-500 hover:text-white hover:bg-green-500 duration-300 transition-all m-auto'
    >
      Passer commande
    </Link>
    
  )
}

export default ValidateCommande