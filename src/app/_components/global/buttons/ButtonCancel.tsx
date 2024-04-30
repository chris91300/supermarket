import React from 'react'

type Props = {
    close: ()=>void
}

function ButtonCancel({ close }: Props) {

    const closeComponent = (e: React.SyntheticEvent) => {
        e.preventDefault();
        close()
      }

  return (
    <button
        type='button'
        onClick={closeComponent} 
        className='border-2 border-red-500 px-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300'
    >
        annuler
    </button>
  )
}

export default ButtonCancel