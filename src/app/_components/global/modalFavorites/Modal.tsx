'use client'

import React from 'react'
import { product } from '@/types/types'
import getEmptyFavoritesComponent from '@/app/_utils/getEmptyFavoritesComponent';
import useGetFormFavoritesComponent from '../../../_hooks/global/useGetFormFavoritesComponent';
import ModalContainer from '../modalContainer/ModalContainer';
import { equals } from 'ramda';


type Props = {
    products: product[]
}

function Modal({ products }: Props) {  
  
  const content = equals( products.length, 0) ?
                  getEmptyFavoritesComponent() :
                  useGetFormFavoritesComponent(products); 
  return (
        <ModalContainer>
          { content }
        </ModalContainer>
  )
}

export default Modal