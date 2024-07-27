import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


function Cart() {
  return (
    <FaShoppingCart
      className="absolute z-20 bottom-9 left-1/4 text-violet animate-cartIsMoving"
      size={50}
    />
  )
}

export default Cart