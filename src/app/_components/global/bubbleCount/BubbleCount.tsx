"use client"

import React from 'react'

export default function BubbleCount({ count, }:{count: number}) {
  return (
    <div className='absolute w-5 h-5 top-[-5px] right-[-5px]
                    flex justify-center items-center rounded-full
                    transition-all duration-500
                    text-white bg-violet
                    group-hover:text-violet group-hover:bg-white'
    >
        <p>
            { count }
        </p>
    </div>
  )
}
