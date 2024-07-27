'use client'

import Link from 'next/link'
import React from 'react'



export default function ErrorBoundary() {
  
  return (
    <div className="flex flex-col justify-center items-center flex-grow gap-6">
        <h1 className='text-3xl'>Une erreur est survenue</h1>
      
      <Link href="/" title="retourner à la page d'acceuil" className='border-2 border-violet px-2 rounded-lg text-violet hover:bg-violet hover:text-white transition-all duration-300'>
        retour à la page d'acceuil
      </Link>
    </div>
    
  )
}
