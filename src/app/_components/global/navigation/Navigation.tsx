import React from 'react'
import ButtonHeart from "../icones/ButtonHeart"
import LinkCart from "../icones/LinkCart"
import ButtonMenu from "../icones/ButtonMenu"

export default function Navigation() {
  const iconSize = 40;

  return (
    <div className='flex gap-5'>
      <ButtonHeart size={40} />
      <nav className='flex gap-5'>      
      <LinkCart size={40} />
      <ButtonMenu size={40} />
      </nav>
    </div>
  )
}
