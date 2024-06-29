import { product } from "@/types/types";
import { deleteProduct } from "@/lib/features/favorites/favoritesSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useDeleteProductFromFavorites(product: product) {
    const dispatch = useAppDispatch();

    return function deleteProductFromFavorites() {
        dispatch(deleteProduct(product.id));
        toast.success(`${product.name} a bien été retiré de vos favories.`);
    };
}
