'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    error: Error
}
// A voir si je garde la version notFound.
export default function ErrorBoundary({error}: Props) {
  notFound();
  /*return (
    <div className="flex flex-col justify-center items-center">
      <p>{error.message}</p>
      <Link href="/" title="retourner à la page d'acceuil">
        retour à la page d'acceuil
      </Link>
    </div>
    
  )*/
}
