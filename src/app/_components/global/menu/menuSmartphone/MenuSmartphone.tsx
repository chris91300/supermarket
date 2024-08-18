"use client"

import React from 'react'
import ButtonClose from '../../buttons/ButtonClose'
import useCallBackWhenUrlChanged from '@/app/_hooks/global/useCallBackWhenUrlChanged'


type Props = {
    toogleIsVisible: ()=>void;
    children: React.ReactNode;
}

function MenuSmartphone({ toogleIsVisible, children }: Props) {

    useCallBackWhenUrlChanged(toogleIsVisible);
    

    return (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-white pt-10 text-violet md:hidden'>
            <ButtonClose close={ toogleIsVisible } />
            { children }
        </div>
    )
}

export default MenuSmartphone