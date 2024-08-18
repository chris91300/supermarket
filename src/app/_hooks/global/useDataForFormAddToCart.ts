import useSearchForTheProductInTheCart from "@/app/_hooks/global/useSearchForTheProductInTheCart";
import getAlreadyInCart from "@/app/_utils/getAlreadyInCart";
import getDefaultQuantity from "@/app/_utils/getDefaultQuantity";
import { pipe } from "ramda";
import useGetHandleQuantityOfProductFunction from "./useGetHandleQuantityOfProductFunction";
import { Product } from "@/app/_bdd/types/databasetypes";

export default function useDataForFormAddToCart(product: Product) {
    const getData = pipe(
        useSearchForTheProductInTheCart,
        getAlreadyInCart,
        getDefaultQuantity,
        useGetHandleQuantityOfProductFunction
    );

    return getData(product);
}
