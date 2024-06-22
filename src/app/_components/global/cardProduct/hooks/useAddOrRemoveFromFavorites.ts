import {
    useAddProductToFavorites,
    useDeleteProductFromFavorites,
    useFavorites,
} from "@/app/_hooks/hooks";
import { product } from "@/types/types";
import { includes } from "ramda";

export default function useAddOrRemoveFromFavorites(product: product) {
    const deleteProductFromFavorites = useDeleteProductFromFavorites(product);
    const AddProductToFavorites = useAddProductToFavorites(product);
    const favorites = useFavorites();
    const { products } = favorites;

    return () => {
        const isInFavorites = includes(product, products);
        if (isInFavorites) {
            deleteProductFromFavorites();
        } else {
            AddProductToFavorites();
        }
    };
}
