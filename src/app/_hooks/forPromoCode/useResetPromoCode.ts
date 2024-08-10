import { resetPromoCode } from "@/lib/store/features/promoCode/promoCodeSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useResetPromoCode() {
    const dispatch = useAppDispatch();

    return function resetThePromoCode() {
        dispatch(resetPromoCode());
    };
}
