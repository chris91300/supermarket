import { favoritesTypes, product } from "../types/types";
import favoritesReducer, {
    addProduct,
    deleteProduct,
    empty,
} from "./features/favorites/favoritesSlice";
import favoritesInitialState from "./features/favorites/initialState";

const mockState: favoritesTypes = {
    products: [
        {
            id: "1",
            name: "name 1",
            img: "img name 1",
            packaging: "packaging 1",
            price: 10,
        },
        {
            id: "2",
            name: "name 2",
            img: "img name 2",
            packaging: "packaging 2",
            price: 20,
        },
    ],
    visible: false,
};

describe("test of the cart in the store", () => {
    it("should render the default state", () => {
        const state = favoritesReducer(undefined, { type: "" });
        expect(state).toStrictEqual(favoritesInitialState);
    });

    it("should add a product into the favorites", () => {
        const product: product = {
            id: "1",
            name: "name 1",
            img: "img name",
            packaging: "packaging",
            price: 10,
        };

        let stateExpected: favoritesTypes = {
            products: [product],
            visible: false,
        };

        const state = favoritesReducer(
            favoritesInitialState,
            addProduct(product)
        );

        expect(state).toStrictEqual(stateExpected);
    });

    it("should return the state if we want to add a product already present in the favorites", () => {
        const product: product = {
            id: "1",
            name: "name 1",
            img: "img name 1",
            packaging: "packaging 1",
            price: 10,
        };

        const state = favoritesReducer(mockState, addProduct(product));

        expect(state).toStrictEqual(mockState);
    });

    it("should remove a product from favorites", () => {
        const idToRemove = "1";

        const stateExpected: favoritesTypes = {
            products: [
                {
                    id: "2",
                    name: "name 2",
                    img: "img name 2",
                    packaging: "packaging 2",
                    price: 20,
                },
            ],
            visible: false,
        };

        const state = favoritesReducer(mockState, deleteProduct(idToRemove));

        expect(state).toStrictEqual(stateExpected);
    });

    it("should return the state if we want to remove a product with bad id", () => {
        const idToRemove = "4";
        const state = favoritesReducer(mockState, deleteProduct(idToRemove));

        expect(state).toStrictEqual(mockState);
    });

    it("should empty the cart", () => {
        const state = favoritesReducer(mockState, empty());
        const stateExpected = {
            products: [],
            visible: false,
        };
        expect(state).toStrictEqual(stateExpected);
    });
});
