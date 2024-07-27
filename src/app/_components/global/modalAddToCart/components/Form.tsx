import React, { useState } from 'react'
import { product } from '@/types/types';
import ButtonClose from '../../buttons/ButtonClose';
import Title from '../../title/Title';
import LabelAndInput from '../../labelAndInput/LabelAndInput';
import Price from '../../price/Price';
import Buttons from './Buttons';
import useCloseModal from '@/app/_hooks/forFormAddToCart/useToogleCartFormIsVisible';
import submitEventApply from '@/app/_utils/submitEventApply';

type Props = {
    product: product,
    defaultQuantity: number,
    alreadyInCart: boolean,
    submitFunction: (quantity: number) => void
}


export default function Form({ product, defaultQuantity, alreadyInCart, submitFunction }: Props){
    const { name, packaging, price } = product;
    const [ quantity, setQuantity ] = useState(defaultQuantity);
    const closeModal = useCloseModal()
    const totalPrice = (quantity * price).toFixed(2);

    const submitFormAndClose = () => {
        submitFunction(quantity);
        closeModal();
    }
    
    const submit = submitEventApply(submitFormAndClose)

    


  return (
    <form className='flex flex-col gap-4' onSubmit={submit}>
        <ButtonClose close={closeModal} />
        <Title>AJOUTER AU PANIER</Title>
        <LabelAndInput
            name={name}
            packaging={packaging}
            quantity={quantity}
            price={price}
            handleChange={setQuantity}
        />
        <Price totalPrice={totalPrice} />
        <Buttons alreadyInCart={alreadyInCart} closeModal={closeModal}/>
    </form>
  )
}