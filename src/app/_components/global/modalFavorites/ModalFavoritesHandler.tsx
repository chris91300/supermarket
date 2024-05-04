'use client'

import React from 'react'
import Modal from './Modal';
import { useFavorites } from '@/app/_hooks/hooks';

type Props = {}

function ModalFavoritesHandler({}: Props) {

  const { products, visible } = useFavorites();

  return (
    visible && <Modal products={ products } />
  )
}

export default ModalFavoritesHandler