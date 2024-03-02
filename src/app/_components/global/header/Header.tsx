import React from "react"
import Logo from "../logo/Logo"
import Navigation from "../navigation/Navigation"

export default function Header(){

    return(
        <header className="flex items-center justify-between px-10 py-5 bg-black">
            <Logo />
            <Navigation />
        </header>
    )
}