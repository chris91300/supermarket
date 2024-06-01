import React from 'react'
import { FaTree } from 'react-icons/fa'


type Props = {
    animationName: string
}

function Tree({animationName}: Props) {

  return (
    <FaTree
        className={ `absolute z-10 text-green-500 top-1/4 ${animationName}` }
        size={100}
    />
  )
}

export default Tree