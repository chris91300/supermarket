import { productChoosen } from "@/types/types";
import useSubmitFunction from "./useSubmitFunction";

export default function useGetSubmitFunction({
    alreadyInCart,
    defaultQuantity,
    productChoosen,
}: {
    alreadyInCart: boolean;
    defaultQuantity: number;
    productChoosen: productChoosen;
}) {
    const submitFunction = useSubmitFunction(productChoosen, alreadyInCart);

    return {
        alreadyInCart,
        defaultQuantity,
        submitFunction,
    };
}
