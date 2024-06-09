import React from 'react'
import { CircularProgress } from '@mui/material';

type Props = {}

function Loading({}: Props) {
  return (
    <div className="flex justify-center items-center mt-20">
        <CircularProgress />
    </div>
  )
}

export default Loading