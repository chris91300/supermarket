import { subCategory, article } from "@/types/types";
import { has } from "ramda";

export default function isArticle(data: subCategory | article) {
    return has("price", data);
}
