import React from 'react'
import { product } from '@/types/types'

type Props = {
    products: product[],
    isVisible: boolean
}

function Modal({ products, isVisible }: Props) {
  return (
    <div>Modal</div>
  )
}

export default Modal