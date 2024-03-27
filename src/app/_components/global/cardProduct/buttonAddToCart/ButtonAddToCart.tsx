import React from 'react'

import { FaShoppingCart } from "react-icons/fa";

type Props = {
    click:()=>void
}

export default function ButtonAddToCart({ click }: Props) {
  return (
    <button title="ajouter à vos favories" onClick={click}>
        <FaShoppingCart size={ 20 } />
    </button>
  )
}