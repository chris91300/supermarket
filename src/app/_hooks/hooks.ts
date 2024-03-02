import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../lib/store";
import { cartTypes, favoritesTypes } from "@/types/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCart = () => useAppSelector((state) => state.cart);
export const useFavorites = () => useAppSelector((state) => state.favorites);
export const useFormAddToCart = () =>
    useAppSelector((state) => state.formAddToCart);

enum store {
    cart = "Cart",
    favorites = "Favorites",
    formAddToCart = "FormAddToCart",
}
/*
export const useStore = (store: store) => {
    switch (store) {
        case store.Cart:
            return useCart();

        case "favorites":
            return useFavorites();

        case "formAddToCart":
            return useFormAddToCart();

        default:
            throw new Error(`this store: ${store} doesn't exist.`);
    }
};*/
