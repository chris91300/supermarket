import { subCategory, article } from "@/types/types";
import CardCategory from "@/app/_components/global/cardCategory/CardCategory";
import { has, map } from "ramda";
import CardProduct from "@/app/_components/global/cardProduct/CardProduct";

//  c'est le bordel. il faut donner la category au CardCategory
function isArticle(data: subCategory | article){
    return has("price", data);
}


export default function buildAppropriateCards(categories: string[], data: subCategory[] | article[]){
   
    const [ category ] = categories;

    const cards = map((datas: subCategory | article)=>{
        if(isArticle(datas)){
            const {id} = datas
            return <CardProduct key={id} product={datas} />
        }else{
            const { id, title_fr, imgPresentation, name } = datas;
            return <CardCategory
                        key={id}
                        title={title_fr}
                        img={imgPresentation}
                        category={category}
                        subCategory={name}
                    />
        }

    }, data);

    return cards;   
}