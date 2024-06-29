import { productChoosen } from "@/types/types";
import { lensProp, set } from "ramda";

export const toQuantity = lensProp<productChoosen>("quantity");
export const setToQuantity = set(toQuantity);
