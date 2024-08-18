import DataBase from '@/app/_bdd/DbAdapter';
import { buildMenu } from '@/app/_utils/buildMenu';


export default function Menu() {
    
    const menu = DataBase.getDataForMenu();
    const menuComponents = buildMenu(menu);

  return menuComponents;
}