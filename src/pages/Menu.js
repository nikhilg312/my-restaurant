import React from 'react';
import Footer from '../components/Footer';
import MenuCard from '../components/MenuCard';
function Menu(props){
    return (
        <>
            <MenuCard setCartItems = {props.setCartItems}/>
            <Footer></Footer>
        </>
    );
}

export default Menu;