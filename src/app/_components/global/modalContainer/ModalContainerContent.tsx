import React from 'react'

type Props = {
    children: React.ReactNode
}

function ModalContainerContent({ children }: Props) {

  return (
    <div className='relative w-11/12 max-w-80 bg-white opacity-1 p-4 border-2 border-violet rounded-lg'>
        { children }
    </div>
  )
}

export default ModalContainerContent