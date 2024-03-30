import { useAppDispatch } from "@/app/_hooks/hooks";
import { toogleIsVisible } from "@/lib/features/formAddToCart/formAddToCartSlice";

export default function useToogleAddToCartForm() {
    const dispatch = useAppDispatch();

    return function displayAddToCartForm() {
        dispatch(toogleIsVisible());
    };
}
