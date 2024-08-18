import { deleteProduct } from "@/lib/store/features/favorites/favoritesSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";
import { Product } from "@/app/_bdd/types/databasetypes";

export default function useDeleteProductFromFavorites(product: Product) {
    const dispatch = useAppDispatch();

    return function deleteProductFromFavorites() {
        dispatch(deleteProduct(product.id));
        toast.success(`${product.name} a bien été retiré de vos favories.`);
    };
}
