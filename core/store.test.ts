import {
    cartTypes,
    product,
    productChoosen,
    productModification,
} from "../types/types";
import cartReducer, {
    addProduct,
    changeProductQuantity,
    deleteProduct,
    empty,
} from "./features/cart/cartSlice";
import cartInitialState from "./features/cart/initialState";

describe("test of the cart in the store", () => {
    it("should render the default state", () => {
        const state = cartReducer(undefined, { type: "" });
        expect(state).toBe(cartInitialState);
    });

    it("should add a product into the cart", () => {
        const product: product = {
            id: "1",
            img: "img name",
            packaging: "packaging",
            price: 10,
        };

        const productChoosen: productChoosen = {
            id: "1",
            product: product,
            quantity: 1,
        };

        let stateExpected: cartTypes = [];

        stateExpected.push(productChoosen);

        const state = cartReducer(cartInitialState, addProduct(productChoosen));

        expect(state).toEqual(stateExpected);
    });

    it("should remove a product from the cart", () => {
        const previousState: cartTypes = [
            {
                id: "1",
                product: {
                    id: "1",
                    img: "img name 1",
                    packaging: "packaging 1",
                    price: 10,
                },
                quantity: 1,
            },
            {
                id: "2",
                product: {
                    id: "2",
                    img: "img name 2",
                    packaging: "packaging 2",
                    price: 20,
                },
                quantity: 2,
            },
        ];

        const idToRemove = "1";

        let stateExpected: cartTypes = [
            {
                id: "2",
                product: {
                    id: "2",
                    img: "img name 2",
                    packaging: "packaging 2",
                    price: 20,
                },
                quantity: 2,
            },
        ];

        const state = cartReducer(previousState, deleteProduct(idToRemove));

        expect(state).toEqual(stateExpected);
    });

    it("should modify the quantity of the product", () => {
        const previousState: cartTypes = [
            {
                id: "1",
                product: {
                    id: "1",
                    img: "img name 1",
                    packaging: "packaging 1",
                    price: 10,
                },
                quantity: 1,
            },
            {
                id: "2",
                product: {
                    id: "2",
                    img: "img name 2",
                    packaging: "packaging 2",
                    price: 20,
                },
                quantity: 2,
            },
        ];

        const productModification: productModification = {
            id: "2",
            quantity: 10,
        };

        const expectedState: cartTypes = [
            {
                id: "1",
                product: {
                    id: "1",
                    img: "img name 1",
                    packaging: "packaging 1",
                    price: 10,
                },
                quantity: 1,
            },
            {
                id: "2",
                product: {
                    id: "2",
                    img: "img name 2",
                    packaging: "packaging 2",
                    price: 20,
                },
                quantity: 10,
            },
        ];

        const state = cartReducer(
            previousState,
            changeProductQuantity(productModification)
        );

        expect(state).toEqual(expectedState);
    });

    it("should empty the cart", () => {
        const previousState: cartTypes = [
            {
                id: "1",
                product: {
                    id: "1",
                    img: "img name 1",
                    packaging: "packaging 1",
                    price: 10,
                },
                quantity: 1,
            },
            {
                id: "2",
                product: {
                    id: "2",
                    img: "img name 2",
                    packaging: "packaging 2",
                    price: 20,
                },
                quantity: 2,
            },
        ];

        const state = cartReducer(previousState, empty());

        expect(state).toEqual([]);
    });
});
// les tests pour le cart passe. continuer en ajoutant le reste au store
