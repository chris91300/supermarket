import getCategoriesInformations from '@/app/_utils/forDataBase/getCategoriesInformations'
import React from 'react'
import buildCategoriesCardsFrom from '../../_utils/buildCategoriesCardsFrom';


export default function Categories() {

    const categories = getCategoriesInformations();
    const categoriesCards = buildCategoriesCardsFrom(categories)
  return (
    <section className='flex justify-center flex-wrap gap-10 m-auto'>
      { categoriesCards }
    </section>
  )
}