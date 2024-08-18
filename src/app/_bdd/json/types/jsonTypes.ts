type ID = {
    id: string;
};

export type Product = ID & {
    name: string;
    img: string;
    packaging: string;
    price: number;
};

export type SubCategory = ID & {
    name: string;
    urlName: string;
    title_fr: string;
    imgPresentation: string;
    imgBanner: string;
    products: Product[];
};

export type Category = ID & {
    title_fr: string;
    imgPresentation: string;
    imgBanner: string;
    subcategories: SubCategory[];
};

export type CategoryInformations = ID & {
    category: string;
    img: string;
};

export type CategoriesInformations = CategoryInformations[];

export type CategoryForBuildMenu = {
    menu: string;
    subMenu: string[];
};

export type DataType = {
    [index: string]: Category;
};
