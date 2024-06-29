import useAddProductToFavorites from "@/app/_hooks/forFavorites/useAddProductToFavorites";
import useDeleteProductFromFavorites from "@/app/_hooks/forFavorites/useDeleteProductFromFavorites";
import { product } from "@/types/types";
import useIsInFavorites from "./useIsInFavorites";

export default function useAddOrRemoveFromFavorites(product: product) {
    const deleteProductFromFavorites = useDeleteProductFromFavorites(product);
    const AddProductToFavorites = useAddProductToFavorites(product);
    const isInFavorites = useIsInFavorites(product);

    return function useAddOrRemoveFromFavorites() {
        isInFavorites ? deleteProductFromFavorites() : AddProductToFavorites();
    };
}
