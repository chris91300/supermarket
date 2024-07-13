import { subCategory, article } from "@/types/types";
import CardCategory from "@/app/_components/global/cardCategory/CardCategory";
import { curry, ifElse, map } from "ramda";
import CardProduct from "@/app/_components/global/cardProduct/CardProduct";
import isArticle from "@/app/_utils/isArticle";
import { nanoid } from "@reduxjs/toolkit";


function buildCardsProductWithData(data: article){
    return <CardProduct key={nanoid()} product={data} />
}

function buildCardCategoryWithData(category: string, data: subCategory){
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

function buildCards(category: string, data: subCategory | article){
    const buildCardCategory = buildCardCategoryWithCategory(category);
    const buildCardsBasedOnData = ifElse( isArticle, buildCardsProductWithData, buildCardCategory );
    return buildCardsBasedOnData(data)
}

const buildCardsCurried = curry(buildCards);


export default function buildAppropriateCards(categories: string[], datas: subCategory[] | article[]){
   
    const [ category ] = categories;
    const buildCardsWithCategory = buildCardsCurried(category);
    
    const cards = map<subCategory | article, JSX.Element>(buildCardsWithCategory, datas);

    return cards;   
}