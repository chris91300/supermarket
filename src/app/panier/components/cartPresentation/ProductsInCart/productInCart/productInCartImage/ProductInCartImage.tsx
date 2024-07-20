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
            <Image src={imgPath} fill={true} alt={imgAlt} />
        </div>
}

export default ProductInCartImage