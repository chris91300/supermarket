'use client'

import React from 'react'
import ButtonClose from '../../buttons/ButtonClose'
import useToogleFavoritesIsVisible from '@/app/_hooks/forFavorites/useToogleFavoritesIsVisible';

type Props = {}

function EmptyFavorites({}: Props) {

  const closeModal = useToogleFavoritesIsVisible();
 
  return (
    <>
        <ButtonClose close={closeModal} />
        <p>
            Vous n'avez aucun produit dans vos favories
        </p>
    </>
  )
}

export default EmptyFavorites