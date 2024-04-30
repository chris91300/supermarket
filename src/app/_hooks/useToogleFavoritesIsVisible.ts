import { useAppDispatch } from "./hooks";
import { toogleIsVisible } from "@/lib/features/favorites/favoritesSlice";

export default function useToogleFavoritesIsVisible() {
    const dispatch = useAppDispatch();

    return function toogleModalIsVisible() {
        dispatch(toogleIsVisible());
    };
}
