'use client'

import React from 'react'
import Modal from './Modal'
import { useFormAddToCart } from '@/app/_hooks/hooks';

type Props = {}

function ModalAddToCartHandler({}: Props) {

    const { product, visible } = useFormAddToCart();

  return (
    visible && <Modal product={ product } visible={ visible }/>
  )
}

export default ModalAddToCartHandler