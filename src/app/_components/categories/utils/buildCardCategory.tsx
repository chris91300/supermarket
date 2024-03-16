import { categoryInformations } from "@/types/types";
import CardCategory from "../../global/cardCategory/CardCategory";

export default function buildCardCategory(cat: categoryInformations){    
    const { id, category, img } = cat;
    return <CardCategory key={id} title={category} category={category} img={img}/>    
}