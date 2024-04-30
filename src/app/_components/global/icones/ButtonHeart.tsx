"use client"

import { FaHeart } from "react-icons/fa";
import BubbleCount from "../bubbleCount/BubbleCount";
import { useFavorites } from "@/app/_hooks/hooks";
import useToogleFavoritesIsVisible from "@/app/_hooks/useToogleFavoritesIsVisible";


export default function ButtonHeart({ size }: {size: number}){

    const favorites = useFavorites()
    const totalFavorites = favorites.products.length;
    const openModalfavorites = useToogleFavoritesIsVisible();
    
    
    
    return(
        <button
            title="Voir vos favories"
            className="relative group transition-all duration-500 text-white hover:text-violet"
            onClick={ openModalfavorites }
        >
            <BubbleCount
                className="w-5 h-5 transition-all duration-500
                        text-white bg-violet
                        group-hover:text-violet group-hover:bg-white"
                count={totalFavorites}
            />
             <FaHeart size={size} />
        </button>
    )
}