import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'



function AstucePage() {
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">P<span className="text-violet">A</span>S DE CODE PROMO ???</h1>
      <section className="flex flex-col flex-grow items-center">
        <h2 className="text-xl">Vous allez <span className="text-violet">t</span>out de même pas payer 😜</h2>
        <p>Le code p<span className="text-violet">r</span>omotionel est caché dans cette page.</p>
        <p>Pour <span className="text-violet">g</span>agner le droit de partir sans payer il faut le tro<span className="text-violet">u</span>ver.</p>
        <p>Promis ce n'es<span className="text-violet">t</span> pas très compl<span className="text-violet">i</span>qué.</p>
        <Link
            href="/panier"
            title="retour au panier" 
            className="flex flex-col items-center text-violet mt-6"
        >
            <FaShoppingCart size={ 40 }/>
            retour au panier
        </Link>
    </section>
    </>
  )
}

export default AstucePage