import Image from 'next/image';
import React from 'react'

type Props = {
    img: string,
    name: string,
    hidden: "phone" | "md"
}

function ProductInCartImage({img, name, hidden}: Props) {
    const imgPath = `/img/produits/${img}`;
    const imgAlt = `image du produit: ${name}`;
    const visibility = hidden === "phone" ? "hidden md:block" : "md:hidden";
    
  return <div className={`relative w-12 h-12 object-contain ${visibility}`}>
            <Image src={imgPath} fill alt={imgAlt} sizes='100%'/>
        </div>
}

export default ProductInCartImage