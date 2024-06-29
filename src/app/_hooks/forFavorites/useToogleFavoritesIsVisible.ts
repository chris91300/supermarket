import { toogleIsVisible } from "@/lib/features/favorites/favoritesSlice";
import { useAppDispatch } from "../forUsingStore/hooks";

export default function useToogleFavoritesIsVisible() {
    const dispatch = useAppDispatch();

    return function toogleModalIsVisible() {
        dispatch(toogleIsVisible());
    };
}
