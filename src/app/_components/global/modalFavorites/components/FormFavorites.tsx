import React from 'react'
import Title from '../../title/Title';
import ButtonClose from '../../buttons/ButtonClose';
import Price from '../../price/Price';
import { dataForFormFavorites } from '@/types/types';
import useDataForFavoritesModal from '../../../../_hooks/global/useDataForFavoritesModal';
import ButtonCancel from '../../buttons/ButtonCancel';
import Input from '../../buttons/Input';

type Props = {
    favorites: dataForFormFavorites[]
}


function FormFavorites({favorites}: Props) {

    const {
        inputs,
        totalPrice,
        submit,
        closeModal
    } = useDataForFavoritesModal(favorites);

    return (
        <form className='flex flex-col gap-4' onSubmit={submit}>
            <ButtonClose close={(closeModal)} />
            <Title>FAVORIES</Title>            
            { inputs }
            <Price totalPrice={totalPrice} />
            <div className='flex items-center justify-around'>
                <Input value="ajouter" />
                <ButtonCancel close={closeModal} />
            </div>
            
        </form>
      )
}

export default FormFavorites