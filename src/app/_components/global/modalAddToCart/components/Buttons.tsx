import React from 'react'
import SubmitButton from '../../buttons/SubmitButton';
import ButtonCancel from '../../buttons/ButtonCancel';

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
        <SubmitButton text={ value }/>
        <ButtonCancel close={closeModal}/>
    </div>
  )
}