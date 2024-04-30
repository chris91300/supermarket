import { useAppDispatch } from "@/app/_hooks/hooks";
import { toogleIsVisible } from "@/lib/features/formAddToCart/formAddToCartSlice";

export default function useCloseModalAddToForm() {
    const dispatch = useAppDispatch();
    return function closeModal() {
        dispatch(toogleIsVisible());
    };
}
