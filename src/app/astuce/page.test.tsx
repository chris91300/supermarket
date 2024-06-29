import { render, screen } from "@testing-library/react";
import Astuce from "./page";
import { map } from "ramda";
import { createStore } from "@/lib/store";
import { Provider } from "react-redux";
import { orderIsValide } from "@/lib/features/order/orderSlice";
import { promoCodeIsValide } from "@/lib/features/promoCode/promoCodeSlice";

/** New next/navigation mock */
jest.mock('next/navigation', () => {
    return {
      __esModule: true,
      useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
      }),
    }
  })


// letter A is upper because is in the h1 element and h1 is uppecase
const promoCode = "grAtuit";
const code = promoCode.split("");

describe("TEST OF PAGE ASTUCE", () => {

    it("should display correctly when order is validate but not the promoCode", () => {
        
        const store = createStore();
        store.dispatch(orderIsValide())

        render(<Provider store={store}>
                    <Astuce />
                </Provider>
            );

        const h1 = screen.getByRole("heading", {level: 1});
        expect(h1).toBeInTheDocument();

        const h2 = screen.getByRole("heading", {level: 2});
        expect(h2).toBeInTheDocument();

        map((letter) => {
            if(letter === "t"){
                const element = screen.getAllByText(letter);
                expect(element).toHaveLength(2);
            } else {                
                const element = screen.getByText(letter);
                expect(element).toBeInTheDocument();
            }            
        }, code)

        const link = screen.getByText(/retour au panier/);
        expect(link).toBeInTheDocument();
    })

    it("should not display correctly when order and the promoCode are validate", () => {
        const store = createStore();
        store.dispatch(orderIsValide());
        store.dispatch(promoCodeIsValide());

        render(<Provider store={store}>
                    <Astuce />
                </Provider>
            );

        const h1 = screen.queryByRole("heading", {level: 1});
        expect(h1).not.toBeInTheDocument();
    })

    it("should not display correctly when order and the promoCode are not validate", () => {
        const store = createStore();

        render(<Provider store={store}>
                    <Astuce />
                </Provider>
            );

        const h1 = screen.queryByRole("heading", {level: 1});
        expect(h1).not.toBeInTheDocument();
    })
    
})