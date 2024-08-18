"use client"

import React, { useEffect, useState } from 'react'
import ButtonClose from '../../buttons/ButtonClose'
import { usePathname } from 'next/navigation'


type Props = {
    toogleIsVisible: ()=>void;
    children: React.ReactNode;
}

function MenuSmartphone({ toogleIsVisible, children }: Props) {

    const pathName = usePathname();
    const [ defaultPathName ] = useState(pathName);
    const pathNameHaveChanged = defaultPathName !== pathName;

    useEffect(() => {
        if(pathNameHaveChanged){
            toogleIsVisible()
        }
        
    }, [pathNameHaveChanged, toogleIsVisible]);
    

    return (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-white pt-10 text-violet md:hidden'>
            <ButtonClose close={ toogleIsVisible } />
            { children }
        </div>
    )
}

export default MenuSmartphone