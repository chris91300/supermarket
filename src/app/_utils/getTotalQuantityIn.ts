import { reduce } from "ramda";
import byQuantity from "./byQuantity";

const getTotalQuantityIn = reduce(byQuantity, 0);

export default getTotalQuantityIn;
