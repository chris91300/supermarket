import { dataForFormFavorites } from "@/types/types"
import { useState } from "react";
import getInputsForFavoritesModal from "../../_utils/getInputsForFavoritesModal";
import getTotalPrice from "../../_utils/getTotalPrice";
import useToogleFavoritesIsVisible from "@/app/_hooks/forFavorites/useToogleFavoritesIsVisible";
import handleQuantityOfProducts from "@/app/_utils/handleQuantityOfProducts";
import submitEventApply from "@/app/_utils/submitEventApply";
import formatePrice from "@/app/_utils/formatePrice";
import { pipe } from "ramda";

function useDataForFavoritesModal(favorites: dataForFormFavorites[]) {
    const [ favoritesList, setFavoritesList ] = useState(favorites);
    const closeModal = useToogleFavoritesIsVisible();
    
    const inputs = getInputsForFavoritesModal(favoritesList, setFavoritesList);
    console.warn(favoritesList);
    /*const totalPriceNumber = getTotalPrice(favoritesList);
    const totalPrice = formatePrice(totalPriceNumber);*/
    const totalPrice = pipe(getTotalPrice, formatePrice)(favoritesList);
    const handleQuantityOfProductsAndCloseModal = () => {
        handleQuantityOfProducts(favoritesList);
        closeModal();
    }
    
    const submit = submitEventApply(handleQuantityOfProductsAndCloseModal);


    return {
        inputs,
        totalPrice,
        submit,
        closeModal
    }
}

export default useDataForFavoritesModal