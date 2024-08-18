import { dataForFormFavorites } from "@/types/types";

export default function handleQuantityOfProduct(
    datasProduct: dataForFormFavorites
) {
    const { handleQuantityOfProduct, defaultQuantity } = datasProduct;
    handleQuantityOfProduct(defaultQuantity);
}
