import getCategoriesInformations from '@/app/_utils/forDataBase/getCategoriesInformations'
import React from 'react'
import buildCardsCategories from '../../_utils/buildCardsCategories';


export default function Categories() {
  
    const categories = getCategoriesInformations();
    const categoriesCards = buildCardsCategories(categories)
  return (
    <section className='flex justify-center flex-wrap gap-10 m-auto'>
      { categoriesCards }
    </section>
  )
}