import { has } from "ramda";
import { Product, SubCategory } from "../_bdd/types/databasetypes";

export default function isArticle(data: SubCategory | Product) {
    return has("price", data);
}
