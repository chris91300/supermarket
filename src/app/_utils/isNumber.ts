import { test } from "ramda";

const isNumber = (val: string) => test(/^\d+$/, val);

export default isNumber;
