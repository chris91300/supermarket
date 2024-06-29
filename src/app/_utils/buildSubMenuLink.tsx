import { curry } from "ramda";
import { nanoid } from "@reduxjs/toolkit";
import SubMenuLink from "../_components/global/menu/menuAside/SubMenuLink";


function buildSubMenuLink (primaryMenu: string, secondaryMenu: string){
return (
    <SubMenuLink
        key={nanoid()}
        primaryMenu={primaryMenu}
        secondaryMenu={secondaryMenu}
    /> 
)
}

export default curry(buildSubMenuLink)