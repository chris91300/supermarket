import { getPropFormAddToCart } from "@/app/_utils/getProps";
import { useAppSelector } from "../forUsingStore/hooks";

export default function useFormAddToCart() {
    return useAppSelector(getPropFormAddToCart);
}
