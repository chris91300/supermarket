import React from 'react'
import ModalContainerContent from './ModalContainerContent'

type Props = {
    children: React.ReactNode
}

function ModalContainer({ children }: Props) {
  return (
    <div className='absolute top-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-70'>
        <ModalContainerContent>
            { children }
        </ModalContainerContent>
    </div>
  )
}

export default ModalContainer