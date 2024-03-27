import React from 'react'

type Props = {
    packaging:string
}

export default function CardProductPackaging({ packaging }: Props) {
  return (
    <p className='text-xs'>{ packaging }</p>
  )
}