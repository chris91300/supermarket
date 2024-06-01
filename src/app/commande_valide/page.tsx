import Link from 'next/link'
import React from 'react'
import Animation from './animation/Animation'


export default function CommandeValide() {
  return (
    <main className="flex min-h-screen flex-col py-10 items-center">
        <h1><span className='text-violet font-bold'>MERCI</span> pour votre commande</h1>
        <p>Elle roule déjà vers vous</p>
        <Animation />
        <Link href="/" className='text-violet'>Retour aux courses</Link>
    </main>
  )
}
