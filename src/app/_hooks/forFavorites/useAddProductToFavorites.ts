import { product } from "@/types/types";
import { addProduct } from "@/lib/features/favorites/favoritesSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useAddProductToFavorites(product: product) {
    const dispatch = useAppDispatch();

    return function AddProductToFavorites() {
        dispatch(addProduct(product));
        toast.success(`${product.name} a bien été ajouté de vos favories.`);
    };
}
