'use client'

import React from "react"
import Logo from "../logo/Logo"
import Navigation from "../navigation/Navigation"
import MenuSmartphone from "../menu/menuSmartphone/MenuSmartphone";
import Menu from "../menu/Menu";
import useOnOff from "@/app/_hooks/global/useOnOff";



export default function Header(){

    const {
        isOn: menuSmartphoneIsVisible,
        inverse: toogleMenuSmartphoneIsVisible
    } = useOnOff(false);
      

    return(
        <header className="flex items-center justify-between px-10 py-5 bg-black">
            <Logo />
            <Navigation onClick={ toogleMenuSmartphoneIsVisible }/>
            {menuSmartphoneIsVisible &&
                <MenuSmartphone toogleIsVisible={ toogleMenuSmartphoneIsVisible } >
                    <Menu/>
                </MenuSmartphone>
            }
        </header>
    )
}