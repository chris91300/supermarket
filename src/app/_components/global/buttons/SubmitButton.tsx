import React from 'react'

type Props = {
    text: string
}

function SubmitButton({ text }: Props) {
  return (
    <button type='submit' className='text-green-500 border-2 border-green-500 px-2 rounded-lg
    hover:bg-green-500 hover:text-white transition-all duration-300'>
      {text}
    </button>
  )
}

export default SubmitButton