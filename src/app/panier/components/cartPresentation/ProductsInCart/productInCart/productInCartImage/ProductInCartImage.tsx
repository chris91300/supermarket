import Image from 'next/image';
import React from 'react'

type Props = {
    img: string,
    name: string
}

function ProductInCartImage({img, name}: Props) {
    const imgPath = `/img/produits/${img}`;
    const imgAlt = `image du produit: ${name}`;
    
  return <div className='relative w-12 h-12 object-contain'>
            <Image src={imgPath} fill alt={imgAlt} sizes='100%'/>
        </div>
}

export default ProductInCartImage