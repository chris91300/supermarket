import clickEventApply from '@/app/_utils/clickEventApply';
import React from 'react'

type Props = {
    close: ()=>void
}

export default function ButtonClose({close}: Props) {
  
  const closeComponent = clickEventApply(close);
  
  return (
    <button
      className='absolute flex justify-center items-center w-5 h-5 top-1 right-1'
      onClick={closeComponent}>
        X
    </button>
  )
}

