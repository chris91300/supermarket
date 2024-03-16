import getCategoriesInformations from "./getCategoriesInformations";

describe("TEST OF GET CATEGORIES", () => {
    it("should render the categories informations", () => {
        const resultExpected = [
            {
                id: "6262888368729082",
                category: "fruits et légumes",
                img: "fruit_and_vegetable.jpg",
            },
            {
                id: "27640089675732830",
                category: "pains et viennoiseries",
                img: "bread_and_pastry.jpg",
            },
            {
                id: "220098178230",
                category: "viandes et poissons",
                img: "meat_and_fish.jpg",
            },
            {
                id: "27298822212",
                category: "frais",
                img: "frais.jpg",
            },
        ];

        const categoriesInformations = getCategoriesInformations();

        expect(categoriesInformations).toStrictEqual(resultExpected);
    });
});
