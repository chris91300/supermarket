'use client'

import React from 'react'
import { Product } from '@/app/_bdd/types/databasetypes';
import ModalContainer from '../modalContainer/ModalContainer';
import { length } from 'ramda';
import { equalsZero } from '@/app/_utils/equalsZero';
import EmptyFavorites from './components/EmptyFavorites';
import FormFavorites from './components/FormFavorites';


type Props = {
    products: Product[]
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