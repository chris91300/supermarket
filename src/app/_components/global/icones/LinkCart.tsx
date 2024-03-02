"use client"

import { FaShoppingCart } from "react-icons/fa";
import BubbleCount from "../bubbleCount/BubbleCount";
import { useCart } from "@/app/_hooks/hooks";
import Link from "next/link";


export default function LinkCart({ size }: {size: number}){

    const favorites = useCart()
    const totalFavorites = favorites.length;    

    return(
        <div className="relative group transition-all duration-500 text-white hover:text-violet-500">
            <Link href="/cart">
                <BubbleCount count={totalFavorites} />
                <FaShoppingCart size={size} />
             </Link>
        </div>
    )
}