import { curry } from "ramda";
import SubMenuLink from "../SubMenuLink";
import { nanoid } from "@reduxjs/toolkit";


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