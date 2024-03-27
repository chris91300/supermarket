import React from 'react'

type Props = {
    title: string
}

export default function CardProductTitle({ title }: Props) {
  return (
    <p className='text-violet font-bold text-base'>{ title }</p>
  )
}