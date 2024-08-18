"use client"
import { useState } from 'react'
import { productChoosen } from '@/types/types'
import React from 'react'
import useSubmitFunction from '@/app/_hooks/global/useHandleQuantityOfProduct'
import clickEventApplyWithValue from '@/app/_utils/clickEventApplyWithValue'
import ProductInCartImage from './productInCartImage/ProductInCartImage'
import ProductInCartForm from './productInCartForm.tsx/ProductInCartForm'
import ProductInCartTotalPrice from './productInCartTotalPrice/ProductInCartTotalPrice'

type Props = {
    productChoosen: productChoosen
}

function ProductInCart({ productChoosen }: Props) {
    const { quantity, product } = productChoosen;
    const {name, img, price} = product;
    const productIsInCart = true;
    const [ currentQuantity, setCurrentQuantity ] = useState(quantity);

    const updateProductQuantity = useSubmitFunction(productChoosen, productIsInCart);
    
    const setQuantity = (value: number) => setCurrentQuantity(value)

    const updateQuantity = clickEventApplyWithValue(updateProductQuantity, currentQuantity);

    const deleteProduct = () => updateProductQuantity(0);
    
  return (
    <div className='flex bg-white items-center p-4 border-b border-black first:border-t'>
        <ProductInCartImage
            img={img}
            name={name}
            hidden="phone"
        />
        <ProductInCartForm
            product={product}
            quantity={currentQuantity}
            handleChange={setQuantity}
            updateQuantity={updateQuantity}
            deleteProduct={deleteProduct}
        />
        <ProductInCartTotalPrice
            quantity={quantity}
            price={price}
        />
        
    </div>
  )
}

export default ProductInCart