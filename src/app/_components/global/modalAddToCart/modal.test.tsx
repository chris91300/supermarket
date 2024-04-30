import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore } from "@/lib/store";
import { Provider } from "react-redux";
import ModalHandler from "./ModalAddToCartHandler";
import { getRenderWithStore } from "@/app/_utils/forTests/renderWrappedByProvider";

const productMocked = {
    name: "fraises",
    id: "1",
    img: "fraise.jpg",
    packaging: "barquette de 250g",
    price: 3.2,
};


describe("TEST OF MODALHANDLER COMPONENT", () => {
   
    it("should not display the modal component", () =>{
        const store = createStore();
        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)

        const title = screen.queryByRole("heading", {level: 2, name: "AJOUTER AU PANIER"});
        expect(title).not.toBeInTheDocument();
    })
    
    it("should display the modal component with a product not already in cart", () =>{
        const store = createStore();
        store.dispatch({type: "formAddToCart/addProduct", payload: productMocked})
        store.dispatch({type: "formAddToCart/toogleIsVisible"})
       
        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)        
        
        const title = screen.getByRole("heading", {level: 2, name: "AJOUTER AU PANIER"});
        expect(title).toBeInTheDocument();

        const productName = screen.getByText(productMocked.name);
        expect(productName).toBeInTheDocument();

        const productPackaging = screen.getByText(productMocked.packaging);
        expect(productPackaging).toBeInTheDocument();

        const totalPrice = screen.getByText('Total : 0.00€');
        expect(totalPrice).toBeInTheDocument();
        
        const input = screen.getByRole("spinbutton");
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(0)

        const closeButton = screen.getByRole("button", {name: "X"});
        expect(closeButton).toBeInTheDocument();

        const validerButton = screen.getByRole("button", {name: "ajouter"});
        expect(validerButton).toBeInTheDocument();

        const annulerButton = screen.getByRole("button", {name: "annuler"});
        expect(annulerButton).toBeInTheDocument();
    })

    it("should increment and decrement the quantity and the total price", async () =>{

        const user = userEvent.setup();
        const store = createStore();
        store.dispatch({type: "formAddToCart/addProduct", payload: productMocked})
        store.dispatch({type: "formAddToCart/toogleIsVisible"})
       
        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        
        
        const totalPrice = screen.getByText('Total : 0.00€');
        expect(totalPrice).toBeInTheDocument();
        
        const input = screen.getByRole("spinbutton");
        expect(input).toBeInTheDocument();


        await user.dblClick(input)
        await user.keyboard("1")
        const newTotalPrice = screen.getByText(`Total : ${productMocked.price.toFixed(2)}€`)
        expect(newTotalPrice).toBeInTheDocument();

        await user.dblClick(input)
        await user.keyboard("5")
        const newTotalPriceMultiBy5 = screen.getByText(`Total : ${(productMocked.price * 5).toFixed(2)}€`)
        expect(newTotalPriceMultiBy5).toBeInTheDocument();

        await user.dblClick(input)
        await user.keyboard("3")
        const newTotalPriceMultiBy3 = screen.getByText(`Total : ${(productMocked.price * 3).toFixed(2)}€`)
        expect(newTotalPriceMultiBy3).toBeInTheDocument();
    })

    // I create a store above the 2 next tests because i use the same store
    const store = createStore();

    it("should add product in cart", async () =>{
        const user = userEvent.setup();
        
        store.dispatch({type: "formAddToCart/addProduct", payload: productMocked})
        store.dispatch({type: "formAddToCart/toogleIsVisible"})
       
        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        
        const state = store.getState();
        const { cart } = state;

        expect(cart).toHaveLength(0)
        
        const totalPrice = screen.getByText('Total : 0.00€');
        expect(totalPrice).toBeInTheDocument();
        
        const input = screen.getByRole("spinbutton");
        expect(input).toBeInTheDocument();

        const validerButton = screen.getByRole("button", {name: "ajouter"});
        expect(validerButton).toBeInTheDocument();

        await user.dblClick(input)
        await user.keyboard("5")
        const newTotalPriceMultiBy5 = screen.getByText(`Total : ${(productMocked.price * 5).toFixed(2)}€`)
        expect(newTotalPriceMultiBy5).toBeInTheDocument();

        await user.click(validerButton);

        const newState = store.getState();
        const { cart: newCart } = newState;
        expect(newCart).toHaveLength(1)

        //  Modal should not display after adding a product in the cart
        const title = screen.queryByRole("heading", {level: 2, name: "AJOUTER AU PANIER"});
        expect(title).not.toBeInTheDocument();

        
    })

    it("should display the good quantity of the product when it's already in the cart", () => {
        // I reuse the same store that the test juste beyond bescause the cart have already an product with quantity equal 5. So i don't create a new store.

        store.dispatch({type: "formAddToCart/addProduct", payload: productMocked})
        store.dispatch({type: "formAddToCart/toogleIsVisible"})
        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)

        const totalPrice = screen.getByText(`Total : ${(productMocked.price * 5).toFixed(2)}€`);
        expect(totalPrice).toBeInTheDocument();
        
        const input = screen.getByRole("spinbutton");
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue(5)
    })    
})