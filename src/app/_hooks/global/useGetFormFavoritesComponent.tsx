import { dataForFormFavorites } from "@/types/types";
import { map } from "ramda";
import FormFavorites from "../../_components/global/modalFavorites/components/FormFavorites";
import useDataForFormFavorites from "./useDataForFormFavorites";
import { Product } from "@/app/_bdd/types/databasetypes";

export default function useGetFormFavoritesComponent(products: Product[]){

    const list: dataForFormFavorites[] = map(useDataForFormFavorites, products);
    
    return list;
}