import { dataForFormFavorites } from "@/types/types";
import { curryN, update } from "ramda";
import LabelAndInput, { LabelInputsTypesProps } from "../_components/global/labelAndInput/LabelAndInput";
import addBorderOnHover from "../_components/global/HOC/addBorderOnHover";
import { nanoid } from "@reduxjs/toolkit";

const LabelInputsWithBorderOnHover = addBorderOnHover<LabelInputsTypesProps>(LabelAndInput)

function getInputsComponents(
    favoritesList: dataForFormFavorites[],
    setFavoritesList: React.Dispatch<React.SetStateAction<dataForFormFavorites[]>>,
    datasProduct: dataForFormFavorites,
    index: number
) {
        
    const { defaultQuantity, product } = datasProduct;
    const {name, packaging, price } = product;
    const handleChange = (value: number) => {
        const newDatasProduct = {
            ...datasProduct,
            defaultQuantity: value
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