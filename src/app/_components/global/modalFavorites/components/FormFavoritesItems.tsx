import { cartTypes, product, productChoosen } from '@/types/types'
import React, { useState } from 'react'
import LabelAndInput from '../../labelAndInput/LabelAndInput'
import useCart from '@/app/_hooks/forCart/useCart'
import { equals, filter, head, multiply } from 'ramda'
import formatePrice from '@/app/_utils/formatePrice'

type Props = {
    product: product,
    totalPrice: number,
    recalCulPrice: React.Dispatch<React.SetStateAction<number>>
}


function findProductInCart(cart: cartTypes, product: product){
    const byProduct = (productChoosen: productChoosen) => equals(productChoosen.product, product);    
    const productChoosen = filter(byProduct, cart)
    return head(productChoosen);
}

function FormFavoritesItems({product, totalPrice, recalCulPrice}: Props) {
    /**
     * vérifier si product est dans cart
     * si oui on récup la quantité sinon quantity = 0
     */
    const cart = useCart();
    const { name, packaging, price } = product;
    const productInCart = findProductInCart(cart, product);
    const defaultQuantity = productInCart ? productInCart.quantity : 0;
    //const defaultTotalPrice = multiply(price, quantity);
    //const [ quantity, setQuantity ] = useState(defaultQuantity);

    const handleChange = (value: number) => {

    }

    /**
     * cartType = productChoosen[]
     * product: product,
     * quantity: quantity
     */
    

  return (
    <LabelAndInput
        name={name}
        packaging={packaging}
        quantity={quantity}
        price={price}
    />
  )
}

export default FormFavoritesItems