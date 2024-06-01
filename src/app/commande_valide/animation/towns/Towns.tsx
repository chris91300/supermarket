import React from 'react'
import Town from './Town'

type Props = {}

function Towns({}: Props) {
  return (
    <div className='absolute flex top-1/3 border-b-2 border-gray-500 w-full'>
        <Town building={2} animation="animate-firstTownIsMoving" />
        <Town building={5} animation="animate-secondTownIsMoving" />
    </div>
  )
}

export default Towns