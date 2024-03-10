import React from 'react'
import getSubMenuLinks from './utils/getSubMenuLinks';

export default function SubMenuContainer({ primaryMenu, secondaryMenu }: { primaryMenu: string, secondaryMenu: string[] }) {

    const subMenuLinks = getSubMenuLinks(primaryMenu, secondaryMenu);

  return (
    <div className='flex flex-col'>
        {subMenuLinks}
    </div>
  )
}
