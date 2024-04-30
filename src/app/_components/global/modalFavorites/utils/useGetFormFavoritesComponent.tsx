import { dataForFormFavorites, product } from "@/types/types";
import { map } from "ramda";
import FormFavorites from "../components/FormFavorites";
import useDataForFormFavorites from "../../modalAddToCart/hooks/useDataForFormFavorites";

export default function useGetFormFavoritesComponent(products: product[]){

    const list: dataForFormFavorites[] = map(useDataForFormFavorites, products);
    return <FormFavorites favorites={list}/>
}