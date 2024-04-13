import { productChoosen } from "@/types/types";

export default function getProductChoosenFoundInCart(
    productFounds: productChoosen[]
) {
    const [productChoosen] = productFounds;
    return productChoosen;
}
