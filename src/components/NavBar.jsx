import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import UserShoppingCart from './UserShoppingCart';
import { getAllProductsThunk } from '../store/slices/products.slice'
import { getShoppingCartThunk } from '../store/slices/shoppingCart.slice';



const NavBar = () => {

    const dispatch = useDispatch()

    const numberProductsInShoppingCart = useSelector(state => state.shoppingCart.products.length)


    const user = useSelector(state => state.user)

    const logOut = () => {
        // dispatch(logOut())
        window.localStorage.removeItem('user')
        window.location.reload()
    }

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(getShoppingCartThunk())
    }, [])

    return (
        <nav className='col-12 d-flex justify-content-end gap-2 links-nav-bar'>
            {user ? (
                <>
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic" className='name-user'>
                            {user.firstName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/user">My account</Dropdown.Item>
                            <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </>
            ) : (
                <>
                    <Link to="/user" className='p-2'>
                        Log In
                    </Link>
                    <Link to="/signup" className='p-2'>
                        Sing Up
                    </Link>
                </>
            )}

            <Link to="/purchases" className='p-2'>
                My Orders
            </Link>
            <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic" className='text-black'>
                    <i class="fa-solid fa-cart-shopping button-shopping-cart"></i>{numberProductsInShoppingCart}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <UserShoppingCart/>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
};

export default NavBar;