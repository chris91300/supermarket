import { Product, SubCategory } from "../_bdd/types/databasetypes";
import CardCategory from "@/app/_components/global/cardCategory/CardCategory";
import { curry, map } from "ramda";
import CardProduct from "@/app/_components/global/cardProduct/CardProduct";
import isArticle from "@/app/_utils/isArticle";
import { nanoid } from "@reduxjs/toolkit";



function buildCardsProductWithData(data: Product){
    return <CardProduct key={nanoid()} product={data} />
}

function buildCardCategoryWithData(category: string, data: SubCategory){
    const { title_fr, imgPresentation, name } = data;
        return <CardCategory
                    key={nanoid()}
                    title={title_fr}
                    img={imgPresentation}
                    category={category}
                    subCategory={name}
                />
}

const buildCardCategoryWithCategory = curry(buildCardCategoryWithData);

function buildCards(category: string, data: SubCategory | Product){
    const buildCardCategory = buildCardCategoryWithCategory(category);
    return isArticle(data) ? buildCardsProductWithData(data as Product) : buildCardCategory(data as SubCategory)
}

const buildCardsCurried = curry(buildCards);


export default function buildAppropriateCards(categories: string[], datas: SubCategory[] | Product[]){
   
    const [ category ] = categories;
    const buildCardsWithCategory = buildCardsCurried(category);
    
    const cards = map<SubCategory | Product, JSX.Element>(buildCardsWithCategory, datas);

    return cards;   
}