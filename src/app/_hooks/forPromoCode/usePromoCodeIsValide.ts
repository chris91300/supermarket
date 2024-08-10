import { promoCodeIsValide } from "@/lib/store/features/promoCode/promoCodeSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function usePromoCodeIsValide() {
    const dispatch = useAppDispatch();

    return function validatePromoCode() {
        dispatch(promoCodeIsValide());
    };
}
