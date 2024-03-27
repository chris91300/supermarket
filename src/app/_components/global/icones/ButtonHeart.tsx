"use client"

import { FaHeart } from "react-icons/fa";
import BubbleCount from "../bubbleCount/BubbleCount";
import { useFavorites } from "@/app/_hooks/hooks";


export default function ButtonHeart({ size }: {size: number}){

    const favorites = useFavorites()
    const totalFavorites = favorites.length;    
    // voir pour créer un composant d'ordre supérieur pour ajouter le hover
    return(
        <div className="relative group transition-all duration-500 text-white hover:text-violet">
            <BubbleCount count={totalFavorites} />
             <FaHeart size={size} />
        </div>
    )
}