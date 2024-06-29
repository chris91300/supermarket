import useSearchForTheProductInTheCart from "@/app/_hooks/global/useSearchForTheProductInTheCart";
import getAlreadyInCart from "@/app/_utils/getAlreadyInCart";
import getDefaultQuantity from "@/app/_utils/getDefaultQuantity";
import { product } from "@/types/types";
import { pipe } from "ramda";
import useGetSubmitFunction from "./usePrepareUseSubmitFunction";

export default function useDataForFormAddToCart(product: product) {
    const getData = pipe(
        useSearchForTheProductInTheCart,
        getAlreadyInCart,
        getDefaultQuantity,
        useGetSubmitFunction
    );

    return getData(product);
}
