import { categoryForBuildMenu } from '@/types/types';
import MenuContainer from '../_components/global/menu/menuAside/MenuContainer';
import SubMenuContainer from '../_components/global/menu/menuAside/SubMenuContainer';
import { nanoid } from '@reduxjs/toolkit';


export default function getMenuContainerComponent({menu, subMenu}: categoryForBuildMenu){
    return (
    <MenuContainer  primaryMenu={menu} key={nanoid()} >
        <SubMenuContainer primaryMenu={menu} secondaryMenu={subMenu} />
    </MenuContainer>
    )
}