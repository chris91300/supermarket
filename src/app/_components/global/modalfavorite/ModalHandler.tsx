'use client'

import React from 'react'
import Modal from './Modal';
import { useFormAddToCart } from '@/app/_hooks/hooks';

type Props = {}

function ModalHandler({}: Props) {

    //const { product, visible } = useFormAddToCart();
    const visible = true;

  return (
    visible && <Modal products={ [] } isVisible={ false }/>
  )
}

export default ModalHandler