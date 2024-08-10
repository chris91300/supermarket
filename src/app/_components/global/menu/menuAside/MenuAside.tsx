import React from 'react'
import data from '../../../../_bdd/data.json'
import getDataForMenu from '../../../../_utils/forDataBase/toDelete/getDataForMenu';
import { buildMenu } from '@/app/_utils/buildMenu';
import Database from "@/app/_bdd/DbStrategy";


export default function MenuAside() {

  const menu = Database.getDataForMenu();//getDataForMenu(data);  
  const menuComponents = buildMenu(menu);
  
  return (
    <aside className='hidden w-max h-min text-violet border-violet border-2 md:block'>
      { menuComponents }
    </aside>
  )
}
