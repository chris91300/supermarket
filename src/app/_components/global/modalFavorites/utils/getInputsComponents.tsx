import { dataForFormFavorites } from "@/types/types";
import { curryN, update } from "ramda";
import LabelAndInput, { LabelInputsTypesProps } from "../../labelAndInput/LabelAndInput";
import addBorderOnHover from "./addBorderOnHover";
import { nanoid } from "@reduxjs/toolkit";

const LabelInputsWithBorderOnHover = addBorderOnHover<LabelInputsTypesProps>(LabelAndInput)

function getInputsComponents(
    favoritesList: dataForFormFavorites[],
    setFavoritesList: React.Dispatch<React.SetStateAction<dataForFormFavorites[]>>,
    datasProduct: dataForFormFavorites,
    index: number): JSX.Element{
        
    const { defaultQuantity, product } = datasProduct;
    const {name, packaging, price } = product;
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);
        const newDatasProduct = {
            ...datasProduct,
            defaultQuantity: newValue
        }

        const newState = update(index, newDatasProduct, favoritesList)
        setFavoritesList(newState)
    }    
    
    return (
                <LabelInputsWithBorderOnHover
                    key={nanoid()}
                    name={name}
                    packaging={packaging}
                    quantity={defaultQuantity}
                    price={price}
                    handleChange={handleChange}
                />
        )
}

export default curryN(4, getInputsComponents)