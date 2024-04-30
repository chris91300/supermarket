import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import CardProduct from "./CardProduct";
import userEvent from "@testing-library/user-event";
import { createStore } from "@/lib/store";

const product = {
    "name" :"fraises",
    "id" : "1",
    "img" : "fraise.jpg",
    "packaging" : "barquette de 250g",
    "price" : 3.20                        
};

describe("TEST OF CARDPRODUCT COMPONENT", () => {
    it("should display a CardProduct component", () => {

        const store = createStore();

        render(<Provider store={store}>
                    <CardProduct product={product} />
                </Provider>
            );

        const title = screen.getByText(product.name);
        const packaging = screen.getByText(product.packaging);
        const price = screen.getByText(`${product.price}€`);
        const image = screen.getByAltText(`image du produit: ${product.name}`)
        const heartIcon = screen.getByTitle("Ajouter à vos favories")
        const cartIcon = screen.getByTitle("Ajouter à votre panier")
        const buttons = screen.getAllByRole("button");


        expect(title).toBeInTheDocument();
        expect(packaging).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(heartIcon).toBeInTheDocument();
        expect(cartIcon).toBeInTheDocument();
        expect(buttons).toHaveLength(2)
    });

    it("should add product to favorites when user click on heartIcon", async () => {
        const user = userEvent.setup();
        const store = createStore();

        render(<Provider store={store}>
                    <CardProduct product={product} />
                </Provider>
            );
        
        const heartIcon = screen.getByTitle("Ajouter à vos favories");
        expect(heartIcon).toBeInTheDocument();

        await user.click(heartIcon);

        const fullHeartIcon = screen.getByTitle("Retirer de vos favories");
        expect(fullHeartIcon).toBeInTheDocument();
    })
})