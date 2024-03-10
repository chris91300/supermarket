import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../lib/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCart = () => useAppSelector((state) => state.cart);
export const useFavorites = () => useAppSelector((state) => state.favorites);
export const useFormAddToCart = () =>
    useAppSelector((state) => state.formAddToCart);
