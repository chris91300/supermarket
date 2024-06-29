import { getPropOrder } from "@/app/_utils/getProps";
import { useAppSelector } from "../forUsingStore/hooks";

export default function useOrder() {
    return useAppSelector(getPropOrder);
}
