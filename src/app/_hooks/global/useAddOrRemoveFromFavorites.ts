import useAddProductToFavorites from "@/app/_hooks/forFavorites/useAddProductToFavorites";
import useDeleteProductFromFavorites from "@/app/_hooks/forFavorites/useDeleteProductFromFavorites";
import useIsInFavorites from "./useIsInFavorites";
import { Product } from "@/app/_bdd/types/databasetypes";

export default function useAddOrRemoveFromFavorites(product: Product) {
    const deleteProductFromFavorites = useDeleteProductFromFavorites(product);
    const AddProductToFavorites = useAddProductToFavorites(product);
    const isInFavorites = useIsInFavorites(product);

    return function useAddOrRemoveFromFavorites() {
        isInFavorites ? deleteProductFromFavorites() : AddProductToFavorites();
    };
}
