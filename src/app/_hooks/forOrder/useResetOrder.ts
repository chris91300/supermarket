import { resetOrder } from "@/lib/store/features/order/orderSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useResetOrder() {
    const dispatch = useAppDispatch();

    return function resetTheOrder() {
        dispatch(resetOrder());
    };
}
