import { dataForFormFavorites, product } from "@/types/types";
import { map } from "ramda";
import FormFavorites from "../../_components/global/modalFavorites/components/FormFavorites";
import useDataForFormFavorites from "./useDataForFormFavorites";

export default function useGetFormFavoritesComponent(products: product[]){

    const list: dataForFormFavorites[] = map(useDataForFormFavorites, products);
    
    return <FormFavorites favorites={list}/>
}