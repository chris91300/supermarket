import { dataForFormFavorites } from "@/types/types"
import { useState } from "react";
import getInputsForFavoritesModal from "../../_utils/getInputsForFavoritesModal";
import getTotalPrice from "../../_utils/getTotalPrice";
import useToogleFavoritesIsVisible from "@/app/_hooks/forFavorites/useToogleFavoritesIsVisible";
import callAllSubmitFunction from "@/app/_utils/callAllSubmitFunction";

function useDataForFavoritesModal(favorites: dataForFormFavorites[]) {
    const [ favoritesList, setFavoritesList ] = useState(favorites);
    const inputs = getInputsForFavoritesModal(favoritesList, setFavoritesList);
    const totalPriceNumber = getTotalPrice(favoritesList);
    const totalPrice = totalPriceNumber.toFixed(2);
    const closeModal = useToogleFavoritesIsVisible();
    
    const submit = (e: React.SyntheticEvent)=>{
        e.preventDefault();
        callAllSubmitFunction(favoritesList);
        closeModal();
    }


    return {
        inputs,
        totalPrice,
        submit,
        closeModal
    }
}

export default useDataForFavoritesModal