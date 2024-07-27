import React from 'react'
import BannerTitle from '../_components/global/bannerTitle/BannerTitle'
import CartHandler from './components/cartHandler/CartHandler'


export default function CartPage(){
    
    return(
        <main className='py-10 flex-grow'>
            <BannerTitle title="VOTRE PANIER" img="cart_banner.jpg" alt="image représentant le panier de l'utilisateur"/>
            <CartHandler />
        </main>
    )
}