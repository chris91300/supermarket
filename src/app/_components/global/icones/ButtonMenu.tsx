import React from 'react'
import { TiThMenu } from "react-icons/ti";

type Props = {
  size: number,
  onClick: ()=>void
}

export default function ButtonMenu({ size, onClick }: Props) {
  return (
    <button className='text-violet md:hidden' onClick={onClick}>
    <TiThMenu size={size} />
    </button>
  )
}
