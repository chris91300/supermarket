import { redirect } from 'next/navigation'
import BannerTitle from "../../_components/global/bannerTitle/BannerTitle";
import TemplateWithMenuAside from "../../_components/global/templateWithMenuAside/TemplateWithMenuAside";
import { gt, toUpper } from 'ramda';
import getDataForBannerCategory from './_utils/getDataForBannerCategory';
import getCardsInformations from './getCardsInformations';
import buildAppropriateCards from './buildAppropriateCards';

type categoryProps = {
    params: {
        categories: string[]
    }
}

export default function Category({ params }: categoryProps) {

  const { categories } = params;
  if(gt(categories.length, 2)){
    redirect("/")
  }
  
    
  const { bannerTitle, bannerImg, bannerAlt } = getDataForBannerCategory(categories);  
  const cardsInformations = getCardsInformations(categories);  
  const cardsComponent = buildAppropriateCards(categories, cardsInformations);

  
    return (
      <main className="flex min-h-screen flex-col py-10">        
        <BannerTitle
            title={ toUpper(bannerTitle) }
            img={ bannerImg }
            alt={ bannerAlt }
        />
        
        <TemplateWithMenuAside>
          <section className='flex justify-center flex-wrap gap-10 m-auto'>
          { cardsComponent }
          </section>          
        </TemplateWithMenuAside>
      </main>
    );
  }