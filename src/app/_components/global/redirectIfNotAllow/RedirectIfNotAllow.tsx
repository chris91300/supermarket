'use client'

import React, { useEffect, useState } from 'react'
import Loading from '../loading/Loading';
import useNavigateTo from '@/app/_hooks/global/useNavigateTo';


type RedirectIfNotAllowProps = {
  children: React.ReactNode,
  shouldBeTrueToBeSecure: ()=>boolean
}

function RedirectIfNotAllow({ shouldBeTrueToBeSecure, children }: RedirectIfNotAllowProps) {
    const beTrueToBeSecure = shouldBeTrueToBeSecure();
    const navigateTo = useNavigateTo();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=> {
      if( beTrueToBeSecure ){
        setIsLoading(false);
      }else{
        navigateTo("/");
      }
    }, [beTrueToBeSecure, navigateTo])
    

  return (
    <>
      { isLoading ? <Loading /> : children }
    </>
  )
}

export default RedirectIfNotAllow