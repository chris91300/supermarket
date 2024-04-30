import { add, multiply } from "ramda";
import { dataForFormFavorites } from "@/types/types";

const totalOfQuantyMultiplyByPrice = (
    price: number,
    data: dataForFormFavorites
) => add(price, multiply(data.defaultQuantity, data.product.price));

export default totalOfQuantyMultiplyByPrice;
