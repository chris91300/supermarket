import { times } from 'ramda'
import React from 'react'
import insertBuilding from './utils/insertBuilding'

type Props = {
  building: number,
  animation: string
}


function Town({building, animation}: Props) {
  
  const defaultClassName = "relative flex";
  const finalClassName = `${defaultClassName} ${animation}`;
  const buildings = times(insertBuilding, building);

  return (
    <div className={ finalClassName }>
        { buildings }
    </div>
  )
}

export default Town