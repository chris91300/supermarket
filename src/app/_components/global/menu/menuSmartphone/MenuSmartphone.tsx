import React from 'react'
import data from '@/app/_bdd/data.json'
import ButtonClose from '../../buttons/ButtonClose'
import getDataForMenu from '@/app/_bdd/utils/getDataForMenu'
import { buildMenu } from '../menuAside/utils/buildMenu'

type Props = {
    toogleIsVisible: ()=>void
}
//TODO: à modifier pour pouvoir fermer le menu lors du click sur un lien
function MenuSmartphone({toogleIsVisible}: Props) {

    const menu = getDataForMenu(data);
    const menuComponents = buildMenu(menu);
    

    return (
        <div className='absolute top-0 left-0 w-full h-full z-50 bg-white pt-10 text-violet md:hidden'>
            <ButtonClose close={ toogleIsVisible } />
                { menuComponents }
        </div>
    )
}

export default MenuSmartphone