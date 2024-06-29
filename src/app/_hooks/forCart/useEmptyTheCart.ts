import { empty } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useEmptyTheCart() {
    const dispatch = useAppDispatch();
    return function emptyTheCart() {
        dispatch(empty());
    };
}
