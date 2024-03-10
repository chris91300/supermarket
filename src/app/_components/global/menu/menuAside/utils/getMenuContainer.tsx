import { categoryForBuildMenu } from '@/types/types';
import { v4 as randomID } from 'uuid';
import MenuContainer from "../MenuContainer"
import SubMenuContainer from '../SubMenuContainer';


export default function getMenuContainerComponent({menu, subMenu}: categoryForBuildMenu){
    return (
    <MenuContainer  primaryMenu={menu} key={randomID()} >
        <SubMenuContainer primaryMenu={menu} secondaryMenu={subMenu} />
    </MenuContainer>
    )
}