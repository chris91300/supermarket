import { curry } from "ramda";
import SubMenuLink from "../SubMenuLink";
import { v4 as randomID } from 'uuid';


function buildSubMenuLink (primaryMenu: string, secondaryMenu: string){
return (
    <SubMenuLink
        key={randomID()}
        primaryMenu={primaryMenu}
        secondaryMenu={secondaryMenu}
    /> 
)
}

export default curry(buildSubMenuLink)