import useResetOrder from "@/app/_hooks/forOrder/useResetOrder";
import useResetPromoCode from "@/app/_hooks/forPromoCode/useResetPromoCode";
import { pipe } from "ramda";
import { useEffect } from "react";

export default function useResetOrderAndPromoCodeWhenComponentIsUnmount() {
    const resetOrder = useResetOrder();
    const resetPromoCode = useResetPromoCode();
    const resetOrderAndPromoCode = pipe(resetOrder, resetPromoCode);

    useEffect(() => {
        return resetOrderAndPromoCode;
    }, [resetOrderAndPromoCode]);
}
