"use client"
import { menuContainerType } from '@/types/types';
import React, { useState } from 'react'
import MenuItem from './MenuItem';

export default function MenuContainer({ primaryMenu, children }: menuContainerType) {
    const [ openSubMenu, setOpenSubMenu ] = useState(false);
    const toggleHandleSubMenu = ()=>{
      console.log("click cat")
        setOpenSubMenu(state => !state)
    }

  return (
    <>
        <MenuItem primaryMenu={primaryMenu} onClick={toggleHandleSubMenu}/>
        {
          openSubMenu &&
            children
        }
    </>
  )
}


 