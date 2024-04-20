"use client"

import React from 'react'

type props = {
  count: number,
  className: string
}

export default function BubbleCount({ count, className }:props) {

  
  const defaultClassName = `absolute top-[-5px] right-[-5px] flex justify-center items-center rounded-full `;
  const finalClassName = defaultClassName + className;
   
  return (
    <div className={ finalClassName } >
        <p>
            { count }
        </p>
    </div>
  )
}
