"use client"

import { article } from '@/types/types';
import Image from 'next/image';
import React from 'react'
import ButtonAddToFavorite from './buttonAddToFavorite/ButtonAddToFavorite';
import CardProductTitle from './cardProductTitle/CardProductTitle';
import CardProductPackaging from './cardProductPackaging/CardProductPackaging';
import CardProductPrice from './cardProductPrice/CardProductPrice';
import ButtonAddToCart from './buttonAddToCart/ButtonAddToCart';
/**
 * "name" :"fraises",
    "id" : "1",
    "img" : "fraise.jpg",
    "packaging" : "barquette de 250g",
    "price" : 3.20  
`
 */
type Props = {
  product: article
}

export default function CardProduct({ product }: Props) {
  const { name, img, packaging, price } = product;
  const toogleAddToFavorite = ()=>{
    console.log(`add ${name} add to favorite`)
  };

  const toogleAddToCart = ()=>{
    console.log(`add ${name} add to cart`)
  };
   /**"name" :"fraises",
      "id" : "1",
      "img" : "fraise.jpg",
      "packaging" : "barquette de 250g",
      "price" : 3.20     
  */
  
  return (
    <div className='flex flex-col border border-black rounded-lg w-40 h-60 p-1 bg-white'>
      <div className='flex items-center justify-end'>        
        <ButtonAddToFavorite click={ toogleAddToFavorite } isFull={ false }/>
      </div>
      <div>
        <CardProductTitle title={name} />
        <CardProductPackaging packaging={packaging} />
      </div>
      <div className='relative object-contain grow'>
        <Image src={ `/img/produits/${img}` } alt={ `image du produit: ${name}` } fill={true}/>
      </div>
      <div className='flex items-center justify-between'>
        <CardProductPrice price={price} />
        <ButtonAddToCart click={ toogleAddToCart }/>
      </div>
    </div>
  )
}