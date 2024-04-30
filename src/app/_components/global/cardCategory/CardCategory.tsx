import encodeForUrl from '@/app/_utils/encodeForUrl';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string,
    img: string,
    category: string,
    subCategory?: string
}

export default function CardCategory({ title, img, category, subCategory }: Props) {

  const hrefPath = `/categories/${category}${subCategory? '/'+title: ''}`;
  const href = encodeForUrl(hrefPath);
  const titleAttribute = subCategory?
      `voir les articles de la catégorie ${subCategory}` :
      `voir les sous catégories de la catégorie ${category}`;
  const imgPath = `/img/presentation/${img}`;
  const imageAlt = `une image représentant la catégorie ${subCategory? subCategory : category}`;


  return (
    <div className='relative flex object-cover w-64 h-64 rounded-lg overflow-hidden hover:scale-105 transition-all duration-500'>
      <Image  src={imgPath} fill={true} alt={imageAlt} />
      <Link href={href} title={titleAttribute} className='w-full z-10 flex items-center'>        
      <h2 className='w-full text-center py-2 font-bold bg-black text-white bg-opacity-70'>{ title }</h2>
      </Link>
    </div>
  )
}