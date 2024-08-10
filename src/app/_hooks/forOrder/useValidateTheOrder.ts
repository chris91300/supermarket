import { orderIsValide } from "@/lib/store/features/order/orderSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useValidateTheOrder() {
    const dispatch = useAppDispatch();

    return function validateOrder() {
        dispatch(orderIsValide());
    };
}
