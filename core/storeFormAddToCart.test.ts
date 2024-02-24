import formAddToCartReducer, {
    toogleIsVisible,
} from "./features/formAddToCart/formAddToCartSlice";
import initialState from "./features/formAddToCart/initialState";

describe("test of the form add to cart store", () => {
    it("should render the default state", () => {
        const state = formAddToCartReducer(undefined, { type: "" });
        expect(state).toStrictEqual(initialState);
        expect(state).toBeFalsy();
    });

    it("should be truthy", () => {
        const state = formAddToCartReducer(initialState, toogleIsVisible());
        expect(state).toBeTruthy();
    });

    it("should be falsy", () => {
        const state = formAddToCartReducer(true, toogleIsVisible());
        expect(state).toBeFalsy();
    });
});
