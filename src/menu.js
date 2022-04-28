import React from 'react'
import ItemMenu from './itemMenu';
import ImgMenu from './imgs/icons/menu_icon.png';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <div className='IconeMenu'>
                <img src={ImgMenu} />
                <div className='iconesMenuMobile' id='iconesMenuMobile'>
                    <Link to="/"><ItemMenu texto='Inicio' /></Link>
                    <Link to="Sobre"><ItemMenu texto='Sobre' /></Link>
                    <Link to="Amostras"><ItemMenu texto='Amostras' /></Link>
                    <Link to="Encomendar"><ItemMenu texto='Encomendar' /></Link>
                    <Link to="Contatos"><ItemMenu texto='Contato' /></Link>
                </div>
            </div>
            <div className='Menu'>
                <Link to="/"><ItemMenu texto='Inicio' /></Link>
                <Link to="Sobre"><ItemMenu texto='Sobre' /></Link>
                <Link to="Amostras"><ItemMenu texto='Amostras' /></Link>
                <Link to="Encomendar"><ItemMenu texto='Encomendar' /></Link>
                <Link to="Contatos"><ItemMenu texto='Contato' /></Link>
            </div>
        </>

    );
}
export default Menu;