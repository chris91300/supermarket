import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";

type Props = {
  isInFavorites: boolean,
  click:()=>void
}

export default function ButtonAddToFavorite({ isInFavorites, click }: Props) {
  const size = 20;
  const title = isInFavorites? 'Retirer de vos favories' : "Ajouter à vos favories";

  return (
    <button title={ title } onClick={click} className='text-violet'>
        { isInFavorites ?
            <FaHeart size={size}/> :
            <FaRegHeart size={size} />
        }
    </button>
  )
}