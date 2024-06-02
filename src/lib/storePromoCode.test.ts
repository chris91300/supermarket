import {
    promoCodeIsValide,
    resetPromoCode,
} from "./features/promoCode/promoCodeSlice";
import store from "./store";

// in order to be faster we keep the same store between each test

describe("TEST OF PROMO CODE STORE", () => {
    it("should be falsy by default", () => {
        const { promoCode } = store.getState();
        expect(promoCode).toBeFalsy();
    });

    it("should be truthy if promo code is validated", () => {
        store.dispatch(promoCodeIsValide());
        const { promoCode } = store.getState();
        expect(promoCode).toBeTruthy();
    });

    it("should be falsy when it was reset", () => {
        store.dispatch(resetPromoCode());
        const { promoCode } = store.getState();
        expect(promoCode).toBeFalsy();
    });
});
