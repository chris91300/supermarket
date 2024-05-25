import React from 'react'
import BannerTitle from '../_components/global/bannerTitle/BannerTitle'
import CartHandler from './components/cartHandler/CartHandler'
type Props = {}

export default function CartPage({}: Props){

    /* récupérer le panier
    si vide on affiche "Votre panier est vide"
    avec un link buttonStyle "faire mes courses" 
    */

    return(
        <main>
            <BannerTitle title="VOTRE PANIER" img="cart_banner.jpg" alt="image représentant le panier de l'utilisateur"/>
            <CartHandler />
        </main>
    )
}