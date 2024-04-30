import React from 'react'

type Props = {
    totalPrice: string
}

export default function Price({ totalPrice }: Props) {
    const price = `${totalPrice}€`;
  return (
    <p className='font-bold text-center'>{ `Total : ${price}` }</p>
  )
}

