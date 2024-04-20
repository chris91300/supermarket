import React from 'react'

type Props = {
    alreadyInCart: boolean,
    closeModal: () => void
}

export default function Buttons({
    alreadyInCart,
    closeModal
}: Props) {

    const value = alreadyInCart? "modifier" : "ajouter";
  return (
    <div className='flex items-center justify-around'>
        <input type='submit' value={ value } className='text-green-500'/>
        <button className='text-red-500' onClick={closeModal}>annuler</button>
    </div>
  )
}