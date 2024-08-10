import React from 'react'
import { buildMenu } from '@/app/_utils/buildMenu';
import Database from "@/app/_bdd/DbStrategy";


export default function MenuAside() {

  const menu = Database.getDataForMenu();  
  const menuComponents = buildMenu(menu);
  
  return (
    <aside className='hidden w-max h-min text-violet border-violet border-2 md:block'>
      { menuComponents }
    </aside>
  )
}
