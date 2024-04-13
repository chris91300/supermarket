import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import initialState from '@/lib/features/formAddToCart/initialState'
import formAddToCartReducer, {
    addProduct,
    toogleIsVisible,
} from "@/lib/features/formAddToCart/formAddToCartSlice";
import store from "@/lib/store";
import { Provider } from "react-redux";
import ModalHandler from "./ModalHandler";
//import { addProduct, toogleIsVisible } from "@/lib/features/formAddToCart/formAddToCartSlice";

const product = {
    name: "fraises",
    id: "1",
    img: "fraise.jpg",
    packaging: "barquette de 250g",
    price: 3.2,
};


describe("TEST OF MODALHANDLER COMPONENT", () => {
    //const user = userEvent.setup();
    it("should not display the modal component", () =>{
        render( <Provider store={store} >
                    <ModalHandler />
                </Provider>);
        const title = screen.queryByRole("heading", {level: 2, name: "AJOUTER AU PANIER"});
        expect(title).not.toBeInTheDocument();
    })

    // voir comment modifier le store en dehors du composant
    
   /* it("should display the modal component", () =>{
        render( <Provider store={store} >
                    <ModalHandler />
                </Provider>
            );

        const state = formAddToCartReducer(initialState, addProduct(product));
        const newState = formAddToCartReducer(state, toogleIsVisible());
        
        const title = screen.getByRole("heading", {level: 2, name: "AJOUTER AU PANIER"});
        expect(title).toBeInTheDocument();
    })*/
    
})