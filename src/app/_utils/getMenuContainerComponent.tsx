
import { CategoryForBuildMenu } from '../_bdd/types/databasetypes';
import MenuContainer from '../_components/global/menu/menuAside/MenuContainer';
import SubMenuContainer from '../_components/global/menu/menuAside/SubMenuContainer';
import { nanoid } from '@reduxjs/toolkit';


export default function getMenuContainerComponent({menu, subMenu}: CategoryForBuildMenu){
    return (
    <MenuContainer  primaryMenu={menu} key={nanoid()} >
        <SubMenuContainer primaryMenu={menu} secondaryMenu={subMenu} />
    </MenuContainer>
    )
}