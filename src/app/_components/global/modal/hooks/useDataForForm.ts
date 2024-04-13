import { product } from "@/types/types";
import { pipe } from "ramda";
import useSearchForTheProductInTheCart from "./useSearchForTheProductInTheCart";
import getAlreadyInCart from "./getAlreadyInCart";
import getDefaultQuantity from "./getDefaultQuantity";
import useGetSubmitFunction from "./usePrepareUseSubmitFunction";

//  IL FAUT FACTORISER
export default function useDataForForm(product: product) {
    const getData = pipe(
        useSearchForTheProductInTheCart,
        getAlreadyInCart,
        getDefaultQuantity,
        useGetSubmitFunction
    );

    return getData(product);
}
