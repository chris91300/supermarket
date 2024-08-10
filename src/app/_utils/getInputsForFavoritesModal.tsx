import { dataForFormFavorites } from "@/types/types";
import curriedGetInputsComponents from "./getInputsComponents";
import { uncurryN } from "ramda";


export default function getInputsForFavoritesModal(
    favoritesList: dataForFormFavorites[],
    setFavoritesList: React.Dispatch<React.SetStateAction<dataForFormFavorites[]>>):JSX.Element[]
    {
        

        const getInputsComponentsWithList = curriedGetInputsComponents(favoritesList);
        const curriedGetInputs = getInputsComponentsWithList(setFavoritesList);

        //  Obliger d'utiliser uncurryN afin de ne pas avoir d'erreur de type
        const getInputs = uncurryN<JSX.Element>(2,curriedGetInputs)
        const inputs =  favoritesList.map(getInputs)
        
        return inputs;
}