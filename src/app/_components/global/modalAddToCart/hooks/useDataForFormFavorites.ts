import { product } from "@/types/types";
import useDataForFormAddToCart from "./useDataForFormAddToCart";

export default function useDataForFormFavorites(product: product) {
    const data = useDataForFormAddToCart(product);
    return {
        product,
        ...data,
    };
}
