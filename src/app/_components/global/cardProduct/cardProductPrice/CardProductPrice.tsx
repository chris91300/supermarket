import formatePrice from '@/app/_utils/formatePrice'
import React from 'react'

type Props = {
    price: number
}

export default function CardProductPrice({ price }: Props) {
  
  return (
    <p className='font-bold'>{ formatePrice(price) }€</p>
  )
}