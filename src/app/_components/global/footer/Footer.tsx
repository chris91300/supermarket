import Link from 'next/link'
import React from 'react'



function Footer() {
  return (
    <footer className='flex items-center justify-center gap-6 bg-black py-12'>
        <p className=' text-white border-r-2 border-violet pr-6'>
            MICHEL Christophe            
        </p>
        <Link href="https://github.com/chris91300/supermarket" title="aller sur la page github du repository" className='text-white'>
            voir le code sur github
        </Link>
    </footer>
  )
}

export default Footer