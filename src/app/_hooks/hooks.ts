import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../lib/store";
import { and, not } from "ramda";
import { orderIsValide, resetOrder } from "@/lib/features/order/orderSlice";
import {
    promoCodeIsValide,
    resetPromoCode,
} from "@/lib/features/promoCode/promoCodeSlice";
import { empty } from "@/lib/features/cart/cartSlice";
import { useRouter } from "next/navigation";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCart = () => useAppSelector((state) => state.cart);

export const useFavorites = () => useAppSelector((state) => state.favorites);

export const useFormAddToCart = () =>
    useAppSelector((state) => state.formAddToCart);

export const usePromoCode = () => useAppSelector((state) => state.promoCode);

export const useOrder = () => useAppSelector((state) => state.order);

export const useOrderIsValid = () => and(useOrder(), usePromoCode());

export const useOrderNeedTips = () => and(useOrder(), not(usePromoCode()));

export const useEmptyTheCart = () => {
    const dispatch = useDispatch();
    return () => dispatch(empty());
};

export const useResetOrder = () => {
    const dispatch = useDispatch();
    return () => dispatch(resetOrder());
};

export const useResetPromoCode = () => {
    const dispatch = useDispatch();
    return () => dispatch(resetPromoCode());
};

export const usePromoCodeIsValide = () => {
    const dispatch = useDispatch();
    return () => dispatch(promoCodeIsValide());
};

export const useValidateTheOrder = () => {
    const dispatch = useDispatch();
    return () => dispatch(orderIsValide());
};

export const useNavigateTo = () => {
    const router = useRouter();
    return (path: string) => router.push(path);
};
