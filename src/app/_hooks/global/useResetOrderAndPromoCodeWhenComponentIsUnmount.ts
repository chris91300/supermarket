import useResetOrder from "@/app/_hooks/forOrder/useResetOrder";
import useResetPromoCode from "@/app/_hooks/forPromoCode/useResetPromoCode";
import { useEffect } from "react";

export default function useResetOrderAndPromoCodeWhenComponentIsUnmount() {
    const resetOrder = useResetOrder();
    const resetPromoCode = useResetPromoCode();

    useEffect(() => {
        return () => {
            resetOrder();
            resetPromoCode();
        };
    }, [resetOrder, resetPromoCode]);
}
