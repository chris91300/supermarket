'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react'
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
   
   
    useLayoutEffect(()=> {
      if(isLoading){
        if( beTrueToBeSecure ){
          setIsLoading(false);
        }else{
          navigateTo("/");
        }
      }
      
    }, [beTrueToBeSecure, navigateTo])
    

  return (
    <main className="flex h-full flex-col py-10 items-center flex-grow">
      { isLoading ? <Loading /> : children }
    </main>
  )
}

export default RedirectIfNotAllow