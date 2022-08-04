import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserShoppingCart from './UserShoppingCart';

const NavBar = () => {

    const [cartIsVisible, setCartIsVisible] = useState(false)

    console.log(cartIsVisible)

    return (
        <nav>
            <Link to="/">
                <i class="fa-solid fa-house"></i>
            </Link>
            <Link to="/user">
                <i class="fa-solid fa-user"></i>
            </Link>
            <Button onClick={() => setCartIsVisible(!cartIsVisible)}>
                <i class="fa-solid fa-shopping-bag"></i>
            </Button>
            <UserShoppingCart cartIsVisible={cartIsVisible} />
        </nav>
    );
};

export default NavBar;