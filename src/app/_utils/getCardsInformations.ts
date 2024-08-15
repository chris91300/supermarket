import Database from "@/app/_bdd/DbAdapter";

export default function getCardsInformations(categories: string[]) {
    const [category, subCategory] = categories;
    const userWantSubCategory = Boolean(subCategory);

    if (userWantSubCategory) {
        return Database.getProducts(category, subCategory);
    } else {
        return Database.getSubCategories(category);
    }
}
