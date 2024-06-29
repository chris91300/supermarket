import { productChoosen } from "@/types/types";
import { addProduct } from "@/lib/features/cart/cartSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useAddProductToCart() {
    const dispatch = useAppDispatch();

    return function AddProductToCart(productChoosen: productChoosen) {
        dispatch(addProduct(productChoosen));
        toast.success(
            `${productChoosen.product.name} a bien été ajouté à votre panier.`
        );
    };
}
