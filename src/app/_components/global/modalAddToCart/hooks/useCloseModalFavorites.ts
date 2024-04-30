import { useAppDispatch } from "@/app/_hooks/hooks";
import { toogleIsVisible } from "@/lib/features/favorites/favoritesSlice";

export default function useCloseModalFavorites() {
    const dispatch = useAppDispatch();
    return function closeModal() {
        dispatch(toogleIsVisible());
    };
}
