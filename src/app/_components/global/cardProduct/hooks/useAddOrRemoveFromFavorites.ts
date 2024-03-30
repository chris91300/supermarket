import { useAppDispatch, useFavorites } from "@/app/_hooks/hooks";
import { product } from "@/types/types";
import { includes } from "ramda";
import {
    addProduct,
    deleteProduct,
} from "@/lib/features/favorites/favoritesSlice";

export default function useAddOrRemoveFromFavorites() {
    const dispatch = useAppDispatch();
    const favorites = useFavorites();

    return (product: product) => {
        const isInFavorites = includes(product, favorites);
        if (isInFavorites) {
            dispatch(deleteProduct(product.id));
            return `${product.name} a bien été retirer de vos favories.`;
        } else {
            dispatch(addProduct(product));
            return `${product.name} a bien été ajouter à vos favories.`;
        }
    };
}
