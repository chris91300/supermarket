import React from 'react'

type Props = {
    close: ()=>void
}

export default function ButtonClose({close}: Props) {
  return (
    <button className='absolute top-1 right-1' onClick={close}>X</button>
  )
}

