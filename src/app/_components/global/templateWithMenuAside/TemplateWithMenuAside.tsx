import React from 'react'
import MenuAside from '../menu/menuAside/MenuAside'

type Props = {
    children: React.ReactNode
}

export default function TemplateWithMenuAside({ children }: Props) {
  return (
    <div className='flex py-10'>
        <MenuAside />
        {children}
    </div>
  )
}