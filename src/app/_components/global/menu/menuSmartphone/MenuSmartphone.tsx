"use client"

import React, { useEffect, useState } from 'react'
import ButtonClose from '../../buttons/ButtonClose'
import { buildMenu } from '@/app/_utils/buildMenu'
import { usePathname } from 'next/navigation'
import Database from '@/app/_bdd/DbStrategy'


type Props = {
    toogleIsVisible: ()=>void
}

function MenuSmartphone({toogleIsVisible}: Props) {

    const pathName = usePathname();
    const [ defaultPathName ] = useState(pathName);
    const pathNameHaveChanged = defaultPathName !== pathName
    const menu = Database.getDataForMenu();
    const menuComponents = buildMenu(menu);



    useEffect(() => {
        if(pathNameHaveChanged){
            toogleIsVisible()
        }
        
    }, [pathNameHaveChanged, toogleIsVisible]);
    

    return (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-white pt-10 text-violet md:hidden'>
            <ButtonClose close={ toogleIsVisible } />
                { menuComponents }
        </div>
    )
}

export default MenuSmartphone