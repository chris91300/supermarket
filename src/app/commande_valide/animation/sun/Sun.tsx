import { FaSun } from 'react-icons/fa'

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