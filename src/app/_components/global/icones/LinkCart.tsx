"use client"

import { FaShoppingCart } from "react-icons/fa";
import BubbleCount from "../bubbleCount/BubbleCount";
import { useCart } from "@/app/_hooks/hooks";
import Link from "next/link";
import getTotalQuantityOfProductInCart from "@/app/_utils/getTotalQuantityOfProductInCart";


export default function LinkCart({ size }: {size: number}){

    const cart = useCart();
    const totalQuantityOfArticlesInCart = getTotalQuantityOfProductInCart(cart);  

    return(
        <div
            title="Voir votre panier"
            className="relative group transition-all duration-500 text-white hover:text-violet"
        >
            <Link href="/panier">
                <BubbleCount
                    className="w-5 h-5 transition-all duration-500
                            text-white bg-violet
                            group-hover:text-violet group-hover:bg-white"
                    count={totalQuantityOfArticlesInCart}
                />
                <FaShoppingCart size={size} />
             </Link>
        </div>
    )
}