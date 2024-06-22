import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../lib/store";
import { and, not } from "ramda";
import { orderIsValide, resetOrder } from "@/lib/features/order/orderSlice";
import {
    promoCodeIsValide,
    resetPromoCode,
} from "@/lib/features/promoCode/promoCodeSlice";
import {
    addProduct,
    deleteProduct as deleteProductFromCart,
    changeProductQuantity,
    empty,
} from "@/lib/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { product, productChoosen } from "@/types/types";
import {
    addProduct as addProductToFavorites,
    deleteProduct,
} from "@/lib/features/favorites/favoritesSlice";
import { toast } from "sonner";
import {
    addProduct as addProductToCartForm,
    toogleIsVisible,
} from "@/lib/features/formAddToCart/formAddToCartSlice";

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

export const useResetOrder = () => {
    const dispatch = useAppDispatch();
    return function resetTheOrder() {
        dispatch(resetOrder());
    };
};

export const useResetPromoCode = () => {
    const dispatch = useAppDispatch();
    return function resetThePromoCode() {
        dispatch(resetPromoCode());
    };
};

export const usePromoCodeIsValide = () => {
    const dispatch = useAppDispatch();
    return function validatePromoCode() {
        dispatch(promoCodeIsValide());
    };
};

export const useValidateTheOrder = () => {
    const dispatch = useAppDispatch();
    return function validateOrder() {
        dispatch(orderIsValide());
    };
};

export const useNavigateTo = () => {
    const router = useRouter();
    return function navigateTo(path: string) {
        router.push(path);
    };
};

//  HOOKS FOR FAVORITES
export const useDeleteProductFromFavorites = (product: product) => {
    const dispatch = useAppDispatch();
    return function deleteProductFromFavorites() {
        dispatch(deleteProduct(product.id));
        toast.success(`${product.name} a bien été retiré de vos favories.`);
    };
};

export const useAddProductToFavorites = (product: product) => {
    const dispatch = useAppDispatch();
    return function AddProductToFavorites() {
        dispatch(addProductToFavorites(product));
        toast.success(`${product.name} a bien été ajouté de vos favories.`);
    };
};

//  HOOKS FOR CART FORM
export const useAddProductToCartForm = (product: product) => {
    const dispatch = useAppDispatch();
    return function AddProductToCartForm() {
        dispatch(addProductToCartForm(product));
    };
};

export const useToogleCartFormIsVisible = () => {
    const dispatch = useAppDispatch();
    return function toogleCartFormIsVisible() {
        dispatch(toogleIsVisible());
    };
};

//  HOOKS FOR CART
export const useAddProductToCart = () => {
    const dispatch = useAppDispatch();
    return function AddProductToCart(productChoosen: productChoosen) {
        dispatch(addProduct(productChoosen));
        toast.success(
            `${productChoosen.product.name} a bien été ajouté à votre panier.`
        );
    };
};
// il faut modifier pour envoyer le produit et non l'ID
export const useDeleteProductFromCart = (productChoosen: productChoosen) => {
    const dispatch = useAppDispatch();
    const { id } = productChoosen;
    return function removeProductFromCart() {
        dispatch(deleteProductFromCart(id));
        toast.success(
            `${productChoosen.product.name} a bien été retiré de votre panier`
        );
    };
};

export const useChangeQuantityOfProductChoosen = (
    productChoosen: productChoosen
) => {
    const dispatch = useAppDispatch();
    const { id } = productChoosen;
    return function changeQuantityOfProductChosen(quantity: number) {
        dispatch(changeProductQuantity({ id, quantity }));
        toast.success(
            `La quantité de ${productChoosen.product.name} a bien été modifié`
        );
    };
};

export const useEmptyTheCart = () => {
    const dispatch = useAppDispatch();
    return function emptyTheCart() {
        dispatch(empty());
    };
};
