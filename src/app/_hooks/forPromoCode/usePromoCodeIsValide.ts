import { promoCodeIsValide } from "@/lib/features/promoCode/promoCodeSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function usePromoCodeIsValide() {
    const dispatch = useAppDispatch();

    return function validatePromoCode() {
        dispatch(promoCodeIsValide());
    };
}
