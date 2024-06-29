import { getPropFavorites } from "@/app/_utils/getProps";
import { useAppSelector } from "../forUsingStore/hooks";

export default function useFavorites() {
    return useAppSelector(getPropFavorites);
}
