import React from 'react'
import Cart from './cart/Cart'
import Sun from './sun/Sun'
import Cloud from './cloud/Cloud'
import Tree from './tree/Tree'
import Towns from './towns/Towns'


type Props = {}

function Animation({}: Props) {
   
  return (
    <div className='w-11/12 max-w-[500px] h-52 border border-black rounded-lg relative bg-white overflow-hidden'>
        <Cart />
        <Sun />
        <Cloud />
        <Tree animationName='animate-firstTreeIsMoving' />
        <Tree animationName='animate-secondTreeIsMoving' />
        <Towns />
    </div>
  )
}

export default Animation