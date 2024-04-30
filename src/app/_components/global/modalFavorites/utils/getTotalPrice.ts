import { reduce } from "ramda";
import totalOfQuantyMultiplyByPrice from "./totalOfQuantyMultiplyByPrice";

const getTotalPrice = reduce(totalOfQuantyMultiplyByPrice, 0);

export default getTotalPrice;
