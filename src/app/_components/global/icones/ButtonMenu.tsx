import React from 'react'
import { TiThMenu } from "react-icons/ti";

export default function ButtonMenu({ size }: {size: number}) {
  return (
    <button className='text-violet-500 md:hidden'>
    <TiThMenu size={size} />
    </button>
  )
}
