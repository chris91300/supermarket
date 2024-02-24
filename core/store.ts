import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import favoritesReducer from "./features/favorites/favoritesSlice";
import formAddToCartReducer from "./features/formAddToCart/formAddToCartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer,
        formAddToCart: formAddToCartReducer,
    },
});

export default store;
