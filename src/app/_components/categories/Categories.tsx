
import React from 'react'
import buildCardsCategories from '../../_utils/buildCardsCategories';
import Database from '@/app/_bdd/DbStrategy'

export default function Categories() {
  
    const categories = Database.getCategoriesInformations();
    const categoriesCards = buildCardsCategories(categories);
    
  return (
    <section className='flex justify-center flex-wrap gap-10 m-auto'>
      { categoriesCards }
    </section>
  )
}