import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";

type Props = {
  isFull: boolean,
  click:()=>void
}

export default function ButtonAddToFavorite({ isFull, click }: Props) {
  const size = 20;

  return (
    <button title="ajouter à vos favories" onClick={click}>
        { isFull ?
            <FaHeart size={size} /> :
            <FaRegHeart size={size} />
        }
    </button>
  )
}