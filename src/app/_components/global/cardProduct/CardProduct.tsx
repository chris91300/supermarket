"use client"

import { article } from '@/types/types';
import Image from 'next/image';
import React from 'react'
import ButtonAddToFavorite from './buttonAddToFavorite/ButtonAddToFavorite';
import CardProductTitle from './cardProductTitle/CardProductTitle';
import CardProductPackaging from './cardProductPackaging/CardProductPackaging';
import CardProductPrice from './cardProductPrice/CardProductPrice';
import ButtonAddToCart from './buttonAddToCart/ButtonAddToCart';
import useIsInFavorites from './hooks/useIsInFavorites';
import useAddOrRemoveFromFavorites from './hooks/useAddOrRemoveFromFavorites';
import useToogleAddToCartForm from './hooks/useToogleAddToCartForm';
import { toast } from 'sonner';
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
// maintenant voir si ça fonctionne
export default function CardProduct({ product }: Props) {
  
  const isInFavorites = useIsInFavorites(product);
  const addOrRemoveFromFavorites = useAddOrRemoveFromFavorites();
  const showAddToCartForm = useToogleAddToCartForm();
  const { name, img, packaging, price } = product;

  const toogleAddToFavorite = () => {
    const toastText = addOrRemoveFromFavorites(product);
    toast.success(toastText);
  }
  const displayAddToCartForm = ()=>{
    showAddToCartForm(product);
  };
  
  return (
    <div className='flex flex-col border border-black rounded-lg w-40 h-60 p-1 bg-white'>
      <div className='flex items-center justify-end'>        
        <ButtonAddToFavorite click={ toogleAddToFavorite } isFull={ isInFavorites }/>
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
        <ButtonAddToCart click={ displayAddToCartForm }/>
      </div>
    </div>
  )
}