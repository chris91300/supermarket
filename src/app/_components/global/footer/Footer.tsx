import Link from 'next/link'
import React from 'react'
import LinkToGit from '../links/LinkToGit'
import LinkToPortfolio from '../links/LinkToPortfolio'
import Author from './Author'
import Border from './Border'



function Footer() {
  return (
    <footer className='flex flex-col md:flex-row items-center justify-center gap-6 bg-black py-12'>
        <Author />    
        <Border />    
        <LinkToGit />
        <Border />  
        <LinkToPortfolio />
    </footer>
  )
}

export default Footer