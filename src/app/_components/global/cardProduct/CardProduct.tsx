"use client"

import { Product } from '@/app/_bdd/types/databasetypes';
import Image from 'next/image';
import React from 'react'
import ButtonAddToFavorite from './buttonAddToFavorite/ButtonAddToFavorite';
import CardProductTitle from './cardProductTitle/CardProductTitle';
import CardProductPackaging from './cardProductPackaging/CardProductPackaging';
import CardProductPrice from './cardProductPrice/CardProductPrice';
import ButtonAddToCart from './buttonAddToCart/ButtonAddToCart';
import useIsInFavorites from '../../../_hooks/global/useIsInFavorites';
import useAddOrRemoveFromFavorites from '../../../_hooks/global/useAddOrRemoveFromFavorites';
import useAddToCartForm from '../../../_hooks/global/useAddToCartForm';



type Props = {
  product: Product
}


export default function CardProduct({ product }: Props) {
  
  const isInFavorites = useIsInFavorites(product);  
  const addOrRemoveFromFavorites = useAddOrRemoveFromFavorites(product);
  const showAddToCartForm = useAddToCartForm(product);
  const { name, img, packaging, price } = product;
  
  
  return (
    <div className='flex flex-col border border-black rounded-lg w-40 h-60 p-1 bg-white'>
      <div className='flex items-center justify-end'>        
        <ButtonAddToFavorite click={ addOrRemoveFromFavorites } isInFavorites={ isInFavorites }/>
      </div>
      <div>
        <CardProductTitle title={name} />
        <CardProductPackaging packaging={packaging} />
      </div>
      <div className='relative object-contain grow'>
        <Image src={ `/img/produits/${img}` } alt={ `image du produit: ${name}` } fill sizes='100%'/>
      </div>
      <div className='flex items-center justify-between'>
        <CardProductPrice price={price} />
        <ButtonAddToCart product={product} click={ showAddToCartForm }/>
      </div>
    </div>
  )
}