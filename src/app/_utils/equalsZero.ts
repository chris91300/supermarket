import { equals, flip } from "ramda";

export const equalsZero = flip(equals<number>)(0);
