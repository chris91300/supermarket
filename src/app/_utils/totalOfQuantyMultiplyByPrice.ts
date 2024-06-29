import { add, multiply } from "ramda";
import { dataForFormFavorites, productChoosen } from "@/types/types";
import getQuantityFromFormFavoritesOrProductChoosen from "./getQuantityFromFormFavoritesOrProductChoosen";

const totalOfQuantyMultiplyByPrice = (
    price: number,
    data: dataForFormFavorites | productChoosen
) => {
    const addToPrice = add(price);
    const productQuantity = getQuantityFromFormFavoritesOrProductChoosen(data);
    const productPrice = data.product.price;
    const totalQuantity = addToPrice(multiply(productQuantity, productPrice));

    return totalQuantity;
};

export default totalOfQuantyMultiplyByPrice;
