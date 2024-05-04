import React from 'react'
import data from '../../../../_bdd/data.json'
import getDataForMenu from '../../../../_bdd/utils/getDataForMenu';
import { buildMenu } from './utils/buildMenu';


export default function MenuAside() {

  const menu = getDataForMenu(data);  
  const menuComponents = buildMenu(menu);
  
  return (
    <aside className='hidden w-max h-min text-violet border-violet border-2 md:block'>
      { menuComponents }
    </aside>
  )
}
