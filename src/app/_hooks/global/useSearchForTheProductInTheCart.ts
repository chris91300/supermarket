import useCart from "@/app/_hooks/forCart/useCart";
import { pathEqualName } from "@/app/_utils/patEqualName";
import { product } from "@/types/types";
import { filter } from "ramda";

export default function useSearchForTheProductInTheCart(product: product) {
    const cart = useCart();
    const byProductName = pathEqualName(product.name);
    const productFounds = filter(byProductName, cart);

    return { product, productFounds };
}
