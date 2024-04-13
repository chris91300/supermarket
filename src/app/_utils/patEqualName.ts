import { flip, pathEq } from "ramda";

export const pathEqualName = flip(pathEq)(["product", "name"]);
