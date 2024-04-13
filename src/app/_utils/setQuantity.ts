import { productChoosen } from "@/types/types";
import { lensProp, set } from "ramda";

export const onQuantity = lensProp<productChoosen>("quantity");
export const setQuantity = set(onQuantity);
