import { Product } from "@/app/_bdd/types/databasetypes";
import useDataForFormAddToCart from "./useDataForFormAddToCart";

export default function useDataForFormFavorites(product: Product) {
    const data = useDataForFormAddToCart(product);
    return {
        product,
        ...data,
    };
}
