import { Product } from "@/app/_bdd/types/databasetypes";
import useCart from "@/app/_hooks/forCart/useCart";
import { pathEqualName } from "@/app/_utils/patEqualName";
import { filter } from "ramda";

export default function useSearchForTheProductInTheCart(product: Product) {
    const cart = useCart();
    const byProductName = pathEqualName(product.name);
    const productFounds = filter(byProductName, cart);

    return { product, productFounds };
}
