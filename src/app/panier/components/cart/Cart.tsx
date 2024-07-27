
import Link from 'next/link'
import React from 'react'
import CartPresentation from '../cartPresentation/CartPresentation'


function Cart() {
  return (
    <div className='px-2'>
        <Link href={"/"} className='text-violet'>
            Continuer mes courses
        </Link>
        <CartPresentation />
    </div>
  )
}

export default Cart