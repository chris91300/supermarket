import { getPropPromoCode } from "@/app/_utils/getProps";
import { useAppSelector } from "../forUsingStore/hooks";

export default function usePromoCode() {
    return useAppSelector(getPropPromoCode);
}
