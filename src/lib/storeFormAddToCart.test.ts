import formAddToCartReducer, {
    addProduct,
    toogleIsVisible,
} from "./features/formAddToCart/formAddToCartSlice";
import initialState from "./features/formAddToCart/initialState";

describe("test of the form add to cart store", () => {
    it("should render the default state", () => {
        const state = formAddToCartReducer(undefined, { type: "" });
        expect(state).toStrictEqual(initialState);
        expect(state.visible).toBeFalsy();
    });

    it("should be truthy then falsy", () => {
        const state = formAddToCartReducer(initialState, toogleIsVisible());
        expect(state.visible).toBeTruthy();

        const newState = formAddToCartReducer(state, toogleIsVisible());
        expect(newState.visible).toBeFalsy();
    });

    it("should append a product", () => {
        const product = {
            name: "fraises",
            id: "1",
            img: "fraise.jpg",
            packaging: "barquette de 250g",
            price: 3.2,
        };

        const state = formAddToCartReducer(initialState, addProduct(product));
        expect(state.product).toEqual(product);
    });
});
