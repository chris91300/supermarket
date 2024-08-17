import clickEventApply from '@/app/_utils/clickEventApply';
import React from 'react'
import Button from './Button';

type Props = {
    close: ()=>void
}

export default function ButtonClose({close}: Props) {
  
 return <Button
          className='absolute flex justify-center items-center w-5 h-5 top-1 right-1'
          eventFunction={close}
        >
          X
        </Button>
}

