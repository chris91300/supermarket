import { productChoosen } from "@/types/types";
import { lensProp, set } from "ramda";

export const onID = lensProp<productChoosen>("id");
export const setID = set(onID);
