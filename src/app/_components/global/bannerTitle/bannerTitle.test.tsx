import { render, screen } from "@testing-library/react";
import BannerTitle from "./BannerTitle";


const title = "CATEGORIES";
const img = "categories_banner.jpg"
const alt = "une image représentant une allée de supermarché avec un caddie au centre";


describe("TEST OF BannerTitle COMPONENT", () => {
    it("should render the title", () => {
        
        render(<BannerTitle
                title={title}
                img={img}
                alt={alt}
            />)

        const banner = screen.getByRole("heading", {name: title});
        expect(banner).toBeInTheDocument();
    });

    it("should render the image", () => {
        
        render(<BannerTitle
                title={title}
                img={img}
                alt={alt}
            />)

        const image = screen.getByAltText(alt);
        expect(image).toBeInTheDocument();
    });
});