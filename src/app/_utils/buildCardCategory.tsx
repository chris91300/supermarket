
import { CategoryInformations } from "../_bdd/types/databasetypes";
import CardCategory from "../_components/global/cardCategory/CardCategory";

export default function buildCardCategory(categoryInformations: CategoryInformations){    
    const { id, category, img } = categoryInformations;
    
    return <CardCategory key={id} title={category} category={category} img={img}/>    
}