'use client'

import React from 'react'
import { product } from '@/types/types'
import getEmptyFavoritesComponent from '@/app/_utils/getEmptyFavoritesComponent';
import useGetFormFavoritesComponent from '../../../_hooks/global/useGetFormFavoritesComponent';
import ModalContainer from '../modalContainer/ModalContainer';
import { equals, length } from 'ramda';
import { equalsZero } from '@/app/_utils/equalsZero';


type Props = {
    products: product[]
}

function Modal({ products }: Props) {  
  
  const content = equalsZero(length(products)) ?
                  getEmptyFavoritesComponent() :
                  useGetFormFavoritesComponent(products); 
  return (
        <ModalContainer>
          { content }
        </ModalContainer>
  )
}

export default Modal