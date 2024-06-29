import { getQuantity } from "@/app/_utils/getQuantity";
import { productChoosen } from "@/types/types";

export default function getDefaultQuantity({
    alreadyInCart,
    productChoosen,
}: {
    alreadyInCart: boolean;
    productChoosen: productChoosen;
}) {
    const defaultQuantity = getQuantity(productChoosen);
    return { alreadyInCart, defaultQuantity, productChoosen };
}
