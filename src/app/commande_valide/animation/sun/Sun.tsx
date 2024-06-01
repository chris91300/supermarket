import { FaSun } from 'react-icons/fa'
/**
 * const Sun = styled.i`
    top : 10px;
    left : 10px;
    transform: scale(1.5);
    color: yellow;
    position : absolute;
    z-index : 1;
`

export function AnimationSun(){

    return <Sun className="fas fa-sun"></Sun>
}
 */
import React from 'react'

type Props = {}

function Sun({}: Props) {
  return (
    <FaSun
    className="absolute top-2 left-2 text-yellow-300"
    size={30}
    />
  )
}

export default Sun