'use client'

import React from 'react'
import { product } from '@/types/types'
import getEmptyFavoritesComponent from './utils/getEmptyFavoritesComponent';
import useGetFormFavoritesComponent from './utils/useGetFormFavoritesComponent';
import ModalContainer from '../modalContainer/ModalContainer';
import ModalContainerContent from '../modalContainer/ModalContainerContent';


type Props = {
    products: product[]
}

function Modal({ products }: Props) {
  
  const content = products.length === 0 ?
                  getEmptyFavoritesComponent() :
                  useGetFormFavoritesComponent(products); 
  return (
        <ModalContainer>
          { content }
        </ModalContainer>
  )
}

export default Modal