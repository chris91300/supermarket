'use client'

import React, { useState } from "react"
import Logo from "../logo/Logo"
import Navigation from "../navigation/Navigation"
import MenuSmartphone from "../menu/menuSmartphone/MenuSmartphone";



export default function Header(){

    const [ menuSmartphoneIsVisible, setMenuSmartphoneIsVisible ] = useState(false);
    const toogleMenuSmartphoneIsVisible = () => {
        setMenuSmartphoneIsVisible(state => !state);
    }
    

    return(
        <header className="flex items-center justify-between px-10 py-5 bg-black">
            <Logo />
            <Navigation onClick={ toogleMenuSmartphoneIsVisible }/>
            {menuSmartphoneIsVisible &&
                <MenuSmartphone toogleIsVisible={ toogleMenuSmartphoneIsVisible } />
            }
        </header>
    )
}