import { categoryInformations } from "@/types/types";
import CardCategory from "../_components/global/cardCategory/CardCategory";

export default function buildCardCategory(categoryInformations: categoryInformations){    
    const { id, category, img } = categoryInformations;
    
    return <CardCategory key={id} title={category} category={category} img={img}/>    
}