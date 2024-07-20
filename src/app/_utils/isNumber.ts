import { test } from "ramda";

const isNumber = (val: string) => test(/^\d+$/);

export default isNumber;
