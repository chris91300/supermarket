import clickEventApply from '@/app/_utils/clickEventApply'
import React from 'react'
import Button from './Button'

type Props = {
    close: ()=>void
}

function ButtonCancel({ close }: Props) {

  return <Button
            className='border-2 border-red-500 px-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300'
            eventFunction={close}
          >
            annuler
          </Button>  
}

export default ButtonCancel