import { orderIsValide, resetOrder } from "./features/order/orderSlice";
import store from "./store";

// in order to be faster we keep the same store between each test

describe("TEST OF ORDER STORE", () => {
    it("should be falsy by default", () => {
        const { order } = store.getState();
        expect(order).toBeFalsy();
    });

    it("should be truthy if order is validated", () => {
        store.dispatch(orderIsValide());
        const { order } = store.getState();
        expect(order).toBeTruthy();
    });

    it("should be falsy when it was reset", () => {
        store.dispatch(resetOrder());
        const { order } = store.getState();
        expect(order).toBeFalsy();
    });
});
