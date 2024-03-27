import React from 'react'

type Props = {
    price: number
}

export default function CardProductPrice({ price }: Props) {
  return (
    <p className='font-bold'>{ price }€</p>
  )
}