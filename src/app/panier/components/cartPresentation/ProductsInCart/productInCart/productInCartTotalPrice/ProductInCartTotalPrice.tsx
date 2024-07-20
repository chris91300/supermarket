import { multiply } from 'ramda';
import React from 'react'
import formatePrice from '../../../../../../_utils/formatePrice';

type Props = {
    quantity: number,
    price: number
}

function ProductInCartTotalPrice({quantity, price}: Props) {
    const totalPrice = multiply(quantity, price);
    const formattedPrice = formatePrice(totalPrice)
  return (
    <p>{`${formattedPrice}€`}</p>
  )
}

export default ProductInCartTotalPrice