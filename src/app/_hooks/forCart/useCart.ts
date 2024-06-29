import { getPropCart } from "@/app/_utils/getProps";
import { useAppSelector } from "../forUsingStore/hooks";

export default function useCart() {
    return useAppSelector(getPropCart);
}
