import { resetPromoCode } from "@/lib/features/promoCode/promoCodeSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useResetPromoCode() {
    const dispatch = useAppDispatch();

    return function resetThePromoCode() {
        dispatch(resetPromoCode());
    };
}
