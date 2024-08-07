import React from 'react'

type Props = {
    children: string
}

export default function Title({children}: Props) {
  return (
    <h2 className='text-center font-bold text-2xl'>{ children }</h2>
  )
}

