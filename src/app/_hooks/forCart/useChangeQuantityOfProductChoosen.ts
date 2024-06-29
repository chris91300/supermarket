import { productChoosen } from "@/types/types";
import { changeProductQuantity } from "@/lib/features/cart/cartSlice";
import { toast } from "sonner";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useChangeQuantityOfProductChoosen(
    productChoosen: productChoosen
) {
    const dispatch = useAppDispatch();
    const { id } = productChoosen;
    return function changeQuantityOfProductChosen(quantity: number) {
        dispatch(changeProductQuantity({ id, quantity }));
        toast.success(
            `La quantité de ${productChoosen.product.name} a bien été modifié`
        );
    };
}
