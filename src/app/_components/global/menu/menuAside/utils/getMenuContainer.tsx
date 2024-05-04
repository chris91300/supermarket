import { categoryForBuildMenu } from '@/types/types';
import MenuContainer from "../MenuContainer"
import SubMenuContainer from '../SubMenuContainer';
import { nanoid } from '@reduxjs/toolkit';


export default function getMenuContainerComponent({menu, subMenu}: categoryForBuildMenu){
    return (
    <MenuContainer  primaryMenu={menu} key={nanoid()} >
        <SubMenuContainer primaryMenu={menu} secondaryMenu={subMenu} />
    </MenuContainer>
    )
}