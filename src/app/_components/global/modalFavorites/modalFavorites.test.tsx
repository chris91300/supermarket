import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createStore } from "@/lib/store/store";
import ModalHandler from "./ModalFavoritesHandler";
import { addProduct, toogleIsVisible } from "@/lib/store/features/favorites/favoritesSlice";
import { add, multiply } from "ramda";
import { getRenderWithStore, renderWrappedByProvider } from "@/app/_utils/forTests/renderWrappedByProvider";

window.HTMLElement.prototype.scrollIntoView = jest.fn();


const product1Mocked = {
    name: "fraises",
    id: "1",
    img: "fraise.jpg",
    packaging: "barquette de 250g",
    price: 3.2,
};

const product2Mocked = {
    "name": "kiwi",
    "id" : "2",
    "img" : "kiwi.jpg",
    "packaging" : "la pièce",
    "price" : 0.27                        
}



describe("TEST OF MODAL FAVORITES", () => {

    it("should not display the modal by default", () => {

        renderWrappedByProvider(<ModalHandler />)
        
        const emptyFavorites = screen.queryByText("Vous n'avez aucun produit dans vos favories");
        expect(emptyFavorites).not.toBeInTheDocument();
    })

    it("should display the ModalFavorites component with the text 'Vous n'avez aucun produit dans vos favories'", async () => {

        const user = userEvent.setup();
        const store = createStore();
        store.dispatch(toogleIsVisible());
        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        
        const emptyFavorites = screen.getByText("Vous n'avez aucun produit dans vos favories");
        expect(emptyFavorites).toBeInTheDocument();

        const buttonClose = screen.getByRole("button", { name: 'X'});
        expect(buttonClose).toBeInTheDocument();

        await user.click(buttonClose);
        const emptyFavoritesNotDisplay = screen.queryByText("Vous n'avez aucun produit dans vos favories");
        expect(emptyFavoritesNotDisplay).not.toBeInTheDocument();
    })

    it("should display the modal with 2 products", () => {

        const store = createStore();
        store.dispatch(addProduct(product1Mocked))
        store.dispatch(addProduct(product2Mocked))
        store.dispatch(toogleIsVisible());

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        
        const titleFavorites = screen.getByRole("heading", {level: 2, name: "FAVORIES"});
        expect(titleFavorites).toBeInTheDocument();

        const product1Name = screen.getByText(product1Mocked.name);
        expect(product1Name).toBeInTheDocument();

        const product1Packaging = screen.getByText(product1Mocked.packaging);
        expect(product1Packaging).toBeInTheDocument();        

        const product2Name = screen.getByText(product2Mocked.name);
        expect(product2Name).toBeInTheDocument();

        const product2Packaging = screen.getByText(product2Mocked.packaging);
        expect(product2Packaging).toBeInTheDocument();

        const inputs = screen.getAllByRole("textbox");
        expect(inputs).toHaveLength(2);

        const [ inputProduct1, inputProduct2 ] = inputs;
        expect(inputProduct1).toHaveValue("0");
        expect(inputProduct2).toHaveValue("0");

        const incrementBy1 = screen.getAllByLabelText("ajouter 1 à la quantité")
        const decrementBy1 = screen.getAllByLabelText("retirer 1 à la quantité")

        expect(incrementBy1).toHaveLength(2)
        expect(decrementBy1).toHaveLength(2)

        const submitButton = screen.getByRole("button", {name: "ajouter"})
        expect(submitButton).toBeInTheDocument();

        const cancelButton = screen.getByRole("button", {name: "annuler"})
        expect(cancelButton).toBeInTheDocument();
    })

    it("should calculate a new total price when user increment the product quantity", async () => {

        const user = userEvent.setup();
        const store = createStore();
        store.dispatch(addProduct(product1Mocked))
        store.dispatch(addProduct(product2Mocked))
        store.dispatch(toogleIsVisible());

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        

        const inputs = screen.getAllByRole("textbox");
        

        const [ inputProduct1, inputProduct2 ] = inputs;
        expect(inputProduct1).toHaveValue("0");
        expect(inputProduct2).toHaveValue("0");

        const [ incProduct1 ] = screen.getAllByLabelText("ajouter 1 à la quantité");        

        const totalPrice = screen.getByText('Total : 0.00€')
        expect(totalPrice).toBeInTheDocument();

        //  User increment by 1 the first product quantity
        await user.click(incProduct1);
       
        const newInputs = screen.getAllByRole("textbox");
        expect(newInputs).toHaveLength(2);

        const [ newInputProduct1, newInputProduct2 ] = newInputs;
        expect(newInputProduct1).toHaveValue("1");
        expect(newInputProduct2).toHaveValue("0");

        const newPriceExpected = multiply(product1Mocked.price, 1)

        const newTotalPrice = screen.getByText(`Total : ${newPriceExpected.toFixed(2)}€`)
        expect(newTotalPrice).toBeInTheDocument();

        const [ newIncProduct1, newIncProduct2 ] = screen.getAllByLabelText("ajouter 1 à la quantité");  


        //  User increment by 1 the second product quantity
        await user.click(newIncProduct2);

        const reNewInputs = screen.getAllByRole("textbox");
        expect(reNewInputs).toHaveLength(2);

        const [ reNewInputProduct1, reNewInputProduct2 ] = reNewInputs;
        expect(reNewInputProduct1).toHaveValue("1");
        expect(reNewInputProduct2).toHaveValue("1");

        const reNewPriceExpected = add(multiply(product1Mocked.price, 1), multiply(product2Mocked.price, 1))

        const reNewTotalPrice = screen.getByText(`Total : ${reNewPriceExpected.toFixed(2)}€`)
        expect(reNewTotalPrice).toBeInTheDocument();
    })

    //  FROM NOW I USE THE SAME STORE TO GO FASTER
    const store = createStore();
    
    it("should add both product in the cart with the good quantity", async () => {

        const user = userEvent.setup();
        
        store.dispatch(addProduct(product1Mocked))
        store.dispatch(addProduct(product2Mocked))
        store.dispatch(toogleIsVisible());

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        

        const inputs = screen.getAllByRole("textbox");
        expect(inputs).toHaveLength(2);

        const [ inputProduct1, inputProduct2 ] = inputs;
        expect(inputProduct1).toHaveValue("0");
        expect(inputProduct2).toHaveValue("0");

        const [ incProduct1 ] = screen.getAllByLabelText("ajouter 1 à la quantité");

        //  User increment by 1 the first product quantity
        await user.click(incProduct1);
       
        const newInputs = screen.getAllByRole("textbox");
        expect(newInputs).toHaveLength(2);

        const [ newInputProduct1, newInputProduct2 ] = newInputs;
        expect(newInputProduct1).toHaveValue("1");
        expect(newInputProduct2).toHaveValue("0");

        const [ newIncProduct1, newIncProduct2 ] = screen.getAllByLabelText("ajouter 1 à la quantité");

        //  User increment by 1 the second product quantity
        await user.click(newIncProduct2)

        const reNewInputs = screen.getAllByRole("textbox");
        expect(reNewInputs).toHaveLength(2);

        const [ reNewInputProduct1, reNewInputProduct2 ] = reNewInputs;
        expect(reNewInputProduct1).toHaveValue("1");
        expect(reNewInputProduct2).toHaveValue("1");

        const submitButton = screen.getByRole("button", {name: "ajouter"})
        expect(submitButton).toBeInTheDocument();

        await user.click(submitButton)

        //  modal should be close
        const title = screen.queryByRole("heading", {name: "FAVORIES"});
        expect(title).not.toBeInTheDocument()

        //  the both product should be add to the cart
        const { cart } = store.getState();
        expect(cart).toHaveLength(2)

        const [ productChoosen1, productChoosen2 ] = cart;
        
        expect(productChoosen1.quantity).toEqual(1);
        expect(productChoosen2.quantity).toEqual(1);

    })

    it("should get the quantity of each product from the cart", () => {

        store.dispatch(toogleIsVisible());

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        

        const [ inputProduct1, inputProduct2 ] = screen.getAllByRole("textbox");
        
        expect(inputProduct1).toHaveValue("1");
        expect(inputProduct2).toHaveValue("1");


    })

    it("should get the quantity of each product from the cart when user modify directly the input text", async () => {

        const user = userEvent.setup();

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        

        const inputs = screen.getAllByRole("textbox");
        expect(inputs).toHaveLength(2);

        const [ inputProduct1 ] = inputs;

        await user.dblClick(inputProduct1);
        await user.keyboard("8");

        const submitButton = screen.getByRole("button", {name: "ajouter"});
        await user.click(submitButton);

        const { cart } = store.getState();
        expect(cart).toHaveLength(2)

        const [ productChoosen1 ] = cart;
        
        expect(productChoosen1.quantity).toEqual(8);

    })

    it("should remove the product from the cart when user send a quantity equal 0", async () => {

        const user = userEvent.setup();
        store.dispatch(toogleIsVisible());

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        
        const [ decProduct1, decProduct2 ] = screen.getAllByLabelText("retirer 1 à la quantité")

        await user.click(decProduct2);

        const submitButton = screen.getByRole("button", {name: "ajouter"});
        await user.click(submitButton);

        const { cart } = store.getState();
        expect(cart).toHaveLength(1)

        const [ productChoosen1 ] = cart;
        
        expect(productChoosen1.quantity).toEqual(8);

    })

    it("should close the modal", async () => {

        const user = userEvent.setup();
        store.dispatch(toogleIsVisible());

        const renderWithStore = getRenderWithStore(store);
        renderWithStore(<ModalHandler />)
        


        const cancelButton = screen.getByRole("button", {name: "annuler"});
        await user.click(cancelButton);

        const title = screen.queryByRole("heading", {name: "FAVORIES"});
        expect(title).not.toBeInTheDocument();

    })
})

