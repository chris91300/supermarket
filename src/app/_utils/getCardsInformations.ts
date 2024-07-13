import getSubCategories from "./forDataBase/getSubCategories";
import getProducts from "./forDataBase/getProducts";

export default function getCardsInformations(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantSubCategory = Boolean(subCategory);

    if (userWantSubCategory) {
        return getProducts(category, subCategory);
    } else {
        return getSubCategories(category);
    }
}
