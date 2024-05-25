import React from 'react'

type Props = {}

function Head({}: Props) {
  return (
    <div className='flex items-center justify-between font-bold text-lg p-4' >
        <p>Article</p>
        <p>Prix</p>
    </div>
  )
}

export default Head