import { addProduct } from "@/lib/store/features/favorites/favoritesSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";
import { Product } from "@/app/_bdd/types/databasetypes";

export default function useAddProductToFavorites(product: Product) {
    const dispatch = useAppDispatch();

    return function AddProductToFavorites() {
        dispatch(addProduct(product));
        toast.success(`${product.name} a bien été ajouté de vos favories.`);
    };
}
