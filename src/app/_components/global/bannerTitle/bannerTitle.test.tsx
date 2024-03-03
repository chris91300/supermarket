import { render, screen } from "@testing-library/react";
import BannerTitle from "./BannerTitle";

describe("TEST OF BannerTitle COMPONENT", () => {
    it("should render the title", () => {
        const title = "CATEGORIES";
        const img = "categories_banner.jpg"
        const alt = "une image représentant une allée de supermarché avec un caddie au centre"
        render(<BannerTitle
                title={title}
                img={img}
                alt={alt}
            />)

        const banner = screen.getByRole("heading", {name: title});
        expect(banner).toBeInTheDocument();
    });

    it("should render the image", () => {
        const title = "CATEGORIES";
        const img = "categories_banner.jpg"
        const alt = "une image représentant une allée de supermarché avec un caddie au centre"
        render(<BannerTitle
                title={title}
                img={img}
                alt={alt}
            />)

        const image = screen.getByAltText(alt);
        expect(image).toBeInTheDocument();
    });
});