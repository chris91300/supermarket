import React from 'react'
import Input from '../../buttons/Input';
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
        <Input value={ value }/>
        <ButtonCancel close={closeModal}/>
    </div>
  )
}