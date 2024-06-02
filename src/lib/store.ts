import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import formAddToCartReducer from "./features/formAddToCart/formAddToCartSlice";
import promoCodeReducer from "./features/promoCode/promoCodeSlice";

export const createStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer,
            favorites: favoritesReducer,
            formAddToCart: formAddToCartReducer,
            promoCode: promoCodeReducer,
        },
    });
};

const store = createStore();

export type Store = ReturnType<typeof createStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: CartState, favorites: favoritesState, formAddToCart: formAddToCartState}
export type AppDispatch = typeof store.dispatch;

export default store;
