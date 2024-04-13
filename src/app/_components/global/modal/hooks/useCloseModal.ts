import { useAppDispatch } from "@/app/_hooks/hooks";
import { product } from "@/types/types";
import { toogleIsVisible } from "@/lib/features/formAddToCart/formAddToCartSlice";

export default function useCloseModal() {
    const dispatch = useAppDispatch();
    return function closeModal() {
        dispatch(toogleIsVisible());
    };
}
