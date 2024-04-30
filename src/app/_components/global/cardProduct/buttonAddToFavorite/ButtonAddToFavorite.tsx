import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";

type Props = {
  isFull: boolean,
  click:()=>void
}

export default function ButtonAddToFavorite({ isFull, click }: Props) {
  const size = 20;
  const title = isFull? 'Retirer de vos favories' : "Ajouter à vos favories";

  return (
    <button title={ title } onClick={click} className='text-violet'>
        { isFull ?
            <FaHeart size={size}/> :
            <FaRegHeart size={size} />
        }
    </button>
  )
}