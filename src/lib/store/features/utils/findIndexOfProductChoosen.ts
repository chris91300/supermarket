import { findIndex } from "ramda";
import { cartTypes } from "@/types/types";
import idEqual from "./idEqual";

export default function findIndexOfProductChoosen(id: string, list: cartTypes) {
    const byId = idEqual(id);
    const index = findIndex(byId)(list);
    return index;
}
