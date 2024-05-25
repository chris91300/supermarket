import { add, multiply } from "ramda";
import { dataForFormFavorites, productChoosen } from "@/types/types";

const totalOfQuantyMultiplyByPrice = (
    price: number,
    data: dataForFormFavorites | productChoosen
) => {
    const addToPrice = add(price);
    const productQuantity =
        "defaultQuantity" in data ? data.defaultQuantity : data.quantity;
    const productPrice = data.product.price;
    const totalQuantity = addToPrice(multiply(productQuantity, productPrice));

    return totalQuantity;

    //add(price, multiply(data.defaultQuantity, data.product.price));
};

export default totalOfQuantyMultiplyByPrice;
