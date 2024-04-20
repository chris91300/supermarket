import getProductChoosenFoundInCart from "@/app/_utils/getProductChoosenFoundInCart";
import initNewProductChoosen from "@/app/_utils/initNewProductChoosen";
import wasTheProductFoundInTheCart from "@/app/_utils/wasTheProductFoundInTheCart";
import { cartTypes, product } from "@/types/types";

export default function getAlreadyInCart({
    product,
    productFounds,
}: {
    product: product;
    productFounds: cartTypes;
}) {
    const alreadyInCart = wasTheProductFoundInTheCart(productFounds);

    const productChoosen = alreadyInCart
        ? getProductChoosenFoundInCart(productFounds)
        : initNewProductChoosen(product);

    return { alreadyInCart, productChoosen };
}
