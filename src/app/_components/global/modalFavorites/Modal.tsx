'use client'

import React from 'react'
import { product } from '@/types/types'
import getEmptyFavoritesComponent from '@/app/_utils/getEmptyFavoritesComponent';
import useGetFormFavoritesComponent from '../../../_hooks/global/useGetFormFavoritesComponent';
import ModalContainer from '../modalContainer/ModalContainer';
import { equals, length } from 'ramda';
import { equalsZero } from '@/app/_utils/equalsZero';
import EmptyFavorites from './components/EmptyFavorites';
import FormFavorites from './components/FormFavorites';


type Props = {
    products: product[]
}

function Modal({ products }: Props) {  
  
  const content = equalsZero(length(products)) ? <EmptyFavorites /> : <FormFavorites products={products} />
                 
  return (
        <ModalContainer>
          { content }
        </ModalContainer>
  )
}

export default Modal