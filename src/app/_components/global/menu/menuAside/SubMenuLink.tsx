import { subMenuItemType } from '@/types/types';
import Link from 'next/link'
import React from 'react'
import formatForUrl from './utils/formatForUrl';
 
/**
 *  padding : 5px;
    color: rgb(160, 85, 247);
    &:hover{
        background-color : rgb(160, 85, 247);
        color : white;
    }
    &:visited{
        color: rgb(160, 85, 247);
    }
    & p{
        margin: 5px;
        text-align : end;
        font-weight : normal;
    }   
 
 */

export default function SubMenuLink({ primaryMenu, secondaryMenu }: subMenuItemType) {
    const primaryCategory = formatForUrl(primaryMenu);
    const secondaryCategory = formatForUrl(secondaryMenu);

    const href = `/categories/${primaryCategory}/${secondaryCategory}`;
    const title = `ouvrir la page de la categorie ${secondaryMenu}`

  return (
    <Link href={href} title={title} className='text-end p-2 hover:text-white hover:bg-violet'>
      {secondaryMenu}
    </Link>
  )
}


 