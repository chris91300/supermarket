"use client"
import { menuItemType } from '@/types/types';
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import React, { useState } from 'react'
 

export default function MenuItem({ primaryMenu, onClick }: menuItemType) {

  const [arrowDirection, setArrowDirection] = useState("left");
  const handleclick = () => {
    const direction = arrowDirection === "left" ? "down" : "left";
    setArrowDirection(direction);
    onClick()
  }

  const title = `Categorie ${primaryMenu}. cliquer pour ouvrir le sous menu.`

  return (
    <button
      title={title}
      onClick={handleclick}
      className='flex gap-2 items-center justify-between text-start w-full p-2 hover:text-white hover:bg-violet'
    >
      { primaryMenu }
      {(arrowDirection === "left") && <IoMdArrowDropright /> }
      {(arrowDirection === "down") && <IoMdArrowDropdown /> }
    </button>
  )
}
