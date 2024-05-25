import { render, screen } from "@testing-library/react";
import Astuce from "./page";
import { map } from "ramda";

// letter A is upper because is in the h1 element
const promoCode = "grAtuit";
const code = promoCode.split("");

describe("TEST OF PAGE ASTUCE", () => {

    it("should display correctly", () => {
        render(<Astuce />);

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
    
})