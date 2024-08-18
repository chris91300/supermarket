import React from 'react'
import Title from '../../title/Title';
import ButtonClose from '../../buttons/ButtonClose';
import Price from '../../price/Price';
import useDataForFavoritesModal from '../../../../_hooks/global/useDataForFavoritesModal';
import ButtonCancel from '../../buttons/ButtonCancel';
import SubmitButton from '../../buttons/SubmitButton';
import useGetFormFavoritesComponent from '@/app/_hooks/global/useGetFormFavoritesComponent';
import { Product } from '@/app/_bdd/types/databasetypes';


type Props = {
    products: Product[]
}


function FormFavorites({products}: Props) {

    const favorites = useGetFormFavoritesComponent(products);
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
                <SubmitButton text="ajouter" />
                <ButtonCancel close={closeModal} />
            </div>
            
        </form>
      )
}

export default FormFavorites