import { lensProp, prop, view } from "ramda";
import decodeFromURL from "@/app/_utils/decodeFromUrl";
import db from "../_bdd/data.json";
import { dataType } from "@/types/types";

const data: dataType = db;

export default function getCategoryInformations(category: string) {
    const cat = decodeFromURL(category);
    const categoryInformations = prop(cat, data);

    return categoryInformations;
}
