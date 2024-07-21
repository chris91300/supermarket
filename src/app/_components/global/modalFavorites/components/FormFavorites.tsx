import React, { useState } from 'react'
import Title from '../../title/Title';
import ButtonClose from '../../buttons/ButtonClose';
import Price from '../../price/Price';
import useDataForFavoritesModal from '../../../../_hooks/global/useDataForFavoritesModal';
import ButtonCancel from '../../buttons/ButtonCancel';
import SubmitButton from '../../buttons/SubmitButton';
import useGetFormFavoritesComponent from '@/app/_hooks/global/useGetFormFavoritesComponent';
import { product } from '@/types/types';
import getTotalPrice from '@/app/_utils/getTotalPrice';
import formatePrice from '@/app/_utils/formatePrice';

type Props = {
    products: product[]
}


function FormFavorites({products}: Props) {

    /**
     * je dois créer des itemsForm pour chaque product
     * dans itemsForm, a chaque on change on recalcul le prix total de l'item et envoir au form pour calcul global
     * 
     */

    // TROUVER COMMENT GÉRER LE PRIX TOTAL D'ICI !!!!!!!!!!
    const favorites = useGetFormFavoritesComponent(products);
    //const defaultTotalPrice = formatePrice(0);
    //const [ totalPrice, setTotalPrice ] = useState(0.00);
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