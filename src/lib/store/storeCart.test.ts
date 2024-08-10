import {
    cartTypes,
    productChoosen,
    productModification,
} from "../../types/types";
import cartReducer, {
    addProduct,
    changeProductQuantity,
    deleteProduct,
    empty,
} from "./features/cart/cartSlice";
import cartInitialState from "./features/cart/initialState";

const mockProduc1 = {
    id: "1",
    name: "name 1",
    img: "img name 1",
    packaging: "packaging 1",
    price: 10,
};

const mockProduct2 = {
    id: "2",
    name: "name 2",
    img: "img name 2",
    packaging: "packaging 2",
    price: 20,
};

const mockState: cartTypes = [
    {
        id: "1",
        product: mockProduc1,
        quantity: 1,
    },
    {
        id: "2",
        product: mockProduct2,
        quantity: 2,
    },
];

describe("test of the cart in the store", () => {
    it("should render the default state", () => {
        const state = cartReducer(undefined, { type: "" });
        expect(state).toStrictEqual(cartInitialState);
    });

    it("should add a product into the cart", () => {
        const productChoosen: productChoosen = {
            id: "1",
            product: mockProduc1,
            quantity: 1,
        };

        let stateExpected: cartTypes = [];

        stateExpected.push(productChoosen);

        const state = cartReducer(cartInitialState, addProduct(productChoosen));

        expect(state).toEqual(stateExpected);
    });

    it("should remove a product from the cart", () => {
        const idToRemove = "1";

        const stateExpected: cartTypes = [
            {
                id: "2",
                product: mockProduct2,
                quantity: 2,
            },
        ];

        const state = cartReducer(mockState, deleteProduct(idToRemove));

        expect(state).toEqual(stateExpected);
    });

    it("should return the state if we want to remove a product with bad id", () => {
        const idToRemove = "4";
        const state = cartReducer(mockState, deleteProduct(idToRemove));

        expect(state).toEqual(mockState);
    });

    it("should modify the quantity of the product", () => {
        const productModification: productModification = {
            id: "2",
            quantity: 10,
        };

        const expectedState: cartTypes = [
            {
                id: "1",
                product: mockProduc1,
                quantity: 1,
            },
            {
                id: "2",
                product: mockProduct2,
                quantity: 10,
            },
        ];

        const state = cartReducer(
            mockState,
            changeProductQuantity(productModification)
        );

        expect(state).toEqual(expectedState);
    });

    it("should modify the quantity of the product", () => {
        const productModification: productModification = {
            id: "5",
            quantity: 10,
        };

        const state = cartReducer(
            mockState,
            changeProductQuantity(productModification)
        );

        expect(state).toEqual(mockState);
    });

    it("should empty the cart", () => {
        const state = cartReducer(mockState, empty());

        expect(state).toEqual([]);
    });
});
