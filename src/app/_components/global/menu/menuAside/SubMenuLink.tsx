import encodeForUrl from '@/app/_utils/encodeForUrl';
import { subMenuItemType } from '@/types/types';
import Link from 'next/link'
import React from 'react'
 


export default function SubMenuLink({ primaryMenu, secondaryMenu }: subMenuItemType) {
    const primaryCategory = encodeForUrl(primaryMenu);
    const secondaryCategory = encodeForUrl(secondaryMenu);

    const href = `/categories/${primaryCategory}/${secondaryCategory}`;
    const title = `ouvrir la page de la categorie ${secondaryMenu}`

  return (
    <Link href={href} title={title} className='text-end p-2 hover:text-white hover:bg-violet'>
      {secondaryMenu}
    </Link>
  )
}


 