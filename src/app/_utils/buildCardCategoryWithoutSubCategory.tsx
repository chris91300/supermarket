import { categoryInformations } from "@/types/types";
import CardCategory from "../_components/global/cardCategory/CardCategory";

export default function buildCardCategoryWithoutSubCategory(cat: categoryInformations){    
    const { id, category, img } = cat;
    return <CardCategory key={id} title={category} category={category} img={img}/>    
}