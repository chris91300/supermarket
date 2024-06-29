import { toogleIsVisible } from "@/lib/features/formAddToCart/formAddToCartSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useToogleCartFormIsVisible() {
    const dispatch = useAppDispatch();

    return function toogleCartFormIsVisible() {
        dispatch(toogleIsVisible());
    };
}
