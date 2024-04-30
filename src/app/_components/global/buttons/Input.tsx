import React from 'react'

type Props = {
    value: string
}

function Input({ value}: Props) {
  return (
    <input type='submit' value={ value } className='text-green-500 border-2 border-green-500 px-2 rounded-lg
    hover:bg-green-500 hover:text-white transition-all duration-300'/>
  )
}

export default Input