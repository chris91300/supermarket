import { productChoosen } from "@/types/types";
import useHandleQuantityOfProduct from "./useHandleQuantityOfProduct";

export default function useGetHandleQuantityOfProductFunction({
    alreadyInCart,
    defaultQuantity,
    productChoosen,
}: {
    alreadyInCart: boolean;
    defaultQuantity: number;
    productChoosen: productChoosen;
}) {
    const handleQuantityOfProduct = useHandleQuantityOfProduct(
        productChoosen,
        alreadyInCart
    );

    return {
        alreadyInCart,
        defaultQuantity,
        handleQuantityOfProduct,
    };
}
