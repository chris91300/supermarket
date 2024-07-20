import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'


function EmptyCart() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center p-5'>        
        <p className='flex items-center'>
            <FaShoppingCart className='text-violet mr-1' size={25} />
            Votre panier est vide!
        </p>

        <Link href={"/"} className='py-1 px-2 border border-violet rounded-md text-violet hover:bg-violet hover:text-white transition-all duration-300'>
            Faire mes courses
        </Link>
        
        
    </div>
  )
}

export default EmptyCart