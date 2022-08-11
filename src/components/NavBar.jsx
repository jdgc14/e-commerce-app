import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import UserShoppingCart from './UserShoppingCart';
import { getAllProductsThunk } from '../store/slices/products.slice'
import { getShoppingCartThunk } from '../store/slices/shoppingCart.slice';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavBar = () => {

    const dispatch = useDispatch()

    const numberProductsInShoppingCart = useSelector(state => state.shoppingCart.products.length)

    const user = useSelector(state => state.user)

    const logOut = () => {
        window.localStorage.removeItem('user')
        window.location.reload()
    }

    useEffect(() => {
        dispatch(getAllProductsThunk())
        dispatch(getShoppingCartThunk())
    }, [])

    return (
        <>

            <nav className='col-12 d-flex justify-content-end gap-2 links-nav-bar mt-2'>
                {user ? (
                    <>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" className='name-user'>
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
                    <Dropdown.Toggle variant="" id="dropdown-basic" className='text-black'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <small className='button-shopping-cart'>{numberProductsInShoppingCart}</small>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <UserShoppingCart />
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
            {/* <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand href="#/">Free E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <NavDropdown title={user.firstName} id="basic-nav-dropdown">
                                <NavDropdown.Item href="#/user">
                                    My account
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={logOut}>
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#/purchases">My Orders</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="dropdown-basic" className='text-black'>
                                    <i className="fa-solid fa-cart-shopping button-shopping-cart"></i>{numberProductsInShoppingCart}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <UserShoppingCart />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </>
    );
};

export default NavBar;