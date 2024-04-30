import { dataForFormFavorites } from "@/types/types";

export default function callSubmitFunction(datasProduct: dataForFormFavorites) {
    const { submitFunction, defaultQuantity } = datasProduct;
    submitFunction(defaultQuantity);
}
