import getProductChoosenFoundInCart from "@/app/_utils/getProductChoosenFoundInCart";
import initNewProductChoosen from "@/app/_utils/initNewProductChoosen";
import wasTheProductFoundInTheCart from "@/app/_utils/wasTheProductFoundInTheCart";
import { cartTypes } from "@/types/types";
import { Product } from "../_bdd/types/databasetypes";

export default function getAlreadyInCart({
    product,
    productFounds,
}: {
    product: Product;
    productFounds: cartTypes;
}) {
    const alreadyInCart = wasTheProductFoundInTheCart(productFounds);

    const productChoosen = alreadyInCart
        ? getProductChoosenFoundInCart(productFounds)
        : initNewProductChoosen(product);

    return { alreadyInCart, productChoosen };
}
