import { productChoosen } from "@/types/types";
import { deleteProduct } from "@/lib/store/features/cart/cartSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useDeleteProductFromCart(
    productChoosen: productChoosen
) {
    const dispatch = useAppDispatch();
    const { id } = productChoosen;
    return function removeProductFromCart() {
        dispatch(deleteProduct(id));
        toast.success(
            `${productChoosen.product.name} a bien été retiré de votre panier`
        );
    };
}
