import React from 'react'
import { CircularProgress } from '@mui/material';



function Loading() {
  return (
    <div className="flex justify-center items-center flex-grow">
        <CircularProgress />
    </div>
  )
}

export default Loading