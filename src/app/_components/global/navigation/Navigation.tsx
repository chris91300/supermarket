import React from 'react'
import ButtonHeart from "../icones/ButtonHeart"
import LinkCart from "../icones/LinkCart"
import ButtonMenu from "../icones/ButtonMenu"

type Props = {
  onClick: () => void
}

export default function Navigation( { onClick }: Props ) {
  const iconSize = 30;

  return (
    <div className='flex gap-5'>
      <ButtonHeart size={iconSize } />
      <nav className='flex gap-5'>      
      <LinkCart size={iconSize } />
      <ButtonMenu size={iconSize } onClick={ onClick }/>
      </nav>
    </div>
  )
}
