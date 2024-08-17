import clickEventApply from '@/app/_utils/clickEventApply'
import React from 'react'

type Props = {
    className: string;
    eventFunction: ()=>void;
    children: string;
}

function Button({ className, eventFunction, children }: Props) {

    const applyFunction = clickEventApply(eventFunction);

  return (
    <button
        onClick={applyFunction} 
        className={className}
    >
        { children }
    </button>
  )
}

export default Button