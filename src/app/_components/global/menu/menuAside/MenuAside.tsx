import React from 'react'
import data from '../../../../_bdd/data.json'
import getDataForMenu from './utils/getDataForMenu';
import { buildMenu } from './utils/buildMenu';

/**
 * faire en sorte que la page d'accueil soit juste un titre SUPERMARKET en forme ou avec des fruits
 * comme ça je peux faire un layout pour le reste => categories et sous categories
 */

export default function MenuAside() {

  const menu = getDataForMenu(data);  
  const menuComponents = buildMenu(menu);
  
  return (
    <aside className='w-max text-violet border-violet border-2'>
      { menuComponents }
    </aside>
  )
}
