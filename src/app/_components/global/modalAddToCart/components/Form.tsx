import React, { useState } from 'react'
import { product } from '@/types/types';
import useCloseModal from '../hooks/useCloseModalAddToForm';
import ButtonClose from '../../buttons/ButtonClose';
import Title from '../../title/Title';
import LabelAndInput from '../../labelAndInput/LabelAndInput';
import Price from '../../price/Price';
import Buttons from './Buttons';

type Props = {
    product: product,
    defaultQuantity: number,
    alreadyInCart: boolean,
    submitFunction: (quantity: number) => void
}


export default function Form({ product, defaultQuantity, alreadyInCart, submitFunction }: Props){
    const { name, packaging, price } = product;
    const [ quantity, setQuantity ] = useState(defaultQuantity);
    const totalPrice = (quantity * price).toFixed(2);


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newQuantity = e.currentTarget.value;
        setQuantity(Number(newQuantity))
    }

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        submitFunction(quantity)
        closeModal();
    }

    const closeModal = useCloseModal()


  return (
    <form className='flex flex-col gap-4' onSubmit={submit}>
        <ButtonClose close={closeModal} />
        <Title>AJOUTER AU PANIER</Title>
        <LabelAndInput
            name={name}
            packaging={packaging}
            quantity={quantity}
            price={price}
            handleChange={handleChange}
        />
        <Price totalPrice={totalPrice} />
        <Buttons alreadyInCart={alreadyInCart} closeModal={closeModal}/>
    </form>
  )
}