import { Product } from "@/app/_bdd/types/databasetypes";
import useFavorites from "@/app/_hooks/forFavorites/useFavorites";
import { includes } from "ramda";

export default function useIsInFavorites(product: Product) {
    const { products } = useFavorites();
    const isInFavorites = includes(product, products);

    return isInFavorites;
}
