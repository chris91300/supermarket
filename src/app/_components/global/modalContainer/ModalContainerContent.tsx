'use client'

import React, { useRef } from 'react'
import useScrollInElementWhenIsRender from './hooks/useScrollInElementWhenIsRender'


type Props = {
    children: React.ReactNode
}

function ModalContainerContent({ children }: Props) {
  const modalRef = useRef({} as HTMLDivElement);
  useScrollInElementWhenIsRender(modalRef);


  return (
    <div ref={modalRef} className='relative w-11/12 max-w-80 bg-white opacity-1 p-4 border-2 border-violet rounded-lg'>
        { children }
    </div>
  )
}

export default ModalContainerContent