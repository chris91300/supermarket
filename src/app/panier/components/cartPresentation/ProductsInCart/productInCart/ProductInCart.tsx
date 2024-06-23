"use client"
import { useState } from 'react'
import { productChoosen } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { gte, multiply } from 'ramda'
import useSubmitFunction from '@/app/_components/global/modalAddToCart/hooks/useSubmitFunction'

type Props = {
    productChoosen: productChoosen
}

function ProductInCart({ productChoosen }: Props) {
    const { id, quantity, product } = productChoosen;
    const {name, img, packaging, price} = product;
    const imgPath = `/img/produits/${img}`;
    const imgAlt = `image du produit: ${name}`;
    const productIsInCart = true;
    const [ currentQuantity, setCurrentQuantity ] = useState(quantity);
    const TotalPrice = multiply(quantity, price).toFixed(2);
    const submitFunction = useSubmitFunction(productChoosen, productIsInCart)

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newQuantity = e.currentTarget.value;
        const quantity = parseInt(newQuantity);
        if( gte( quantity, 0 ) ){
            setCurrentQuantity( quantity )
        }else {
            setCurrentQuantity( 0 )
        }
        
    }

    const update = (e:React.FormEvent) => {
        e.preventDefault();
        submitFunction(currentQuantity);
    }

    const deleteProduct = () => {
        submitFunction(0)
    }
    /**
     * id
     * name: string;
    img: string;
    packaging: string;
    price: number;
     */
  return (
    <div className='flex bg-white items-center p-4 border-b border-black first:border-t'>
        <div className='relative w-12 h-12 object-contain'>
            <Image src={imgPath} fill={true} alt={imgAlt} />
        </div>
        <form className='grow px-4 flex flex-col gap-2'>
            <label htmlFor='productChoosenQuantity'>
                <p>{ name }</p>
                <p className='text-xs'>{ `( ${packaging} - ${price.toFixed(2)}€ )` }</p>
            </label>
            <div className='flex gap-3'>
                <input
                    name='productChoosenQuantity'
                    type='number'
                    min={0}
                    step={1}
                    value={ currentQuantity }
                    className='w-12 border border-black rounded-lg pl-1'
                    onChange={handleChange}
                />
                <button className='text-violet text-sm' onClick={update}>modifier</button>
                <button className='text-violet text-sm' onClick={deleteProduct}>supprimer</button>
            </div>
            

        </form>
        <p>{`${TotalPrice}€`}</p>
        
    </div>
  )
}

export default ProductInCart