import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link
      href="/"
      title="logo. lien vers la page d'accueil"
      className='relative w-20 h-20 rounded-lg overflow-hidden'
    >
           <Image src={"/img/logo.jpg"} alt="le logo du site" fill={true} />
    </Link>
  )
}
