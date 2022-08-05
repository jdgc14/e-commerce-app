import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProductInShoppingCart from './ProductInShoppingCart';



const UserShoppingCart = () => {

    const dispatch = useDispatch()

    const shoppingCart = useSelector(state => state.shoppingCart.products)

    const total = shoppingCart.reduce((acc, product) => {
        return acc + product.productsInCart.quantity * product.price
    }, 0)

    return (
        <div className='' style={{minWidth:'250px'}}>
            <h5 className='text-center'>Shopping Cart</h5>
            {shoppingCart.map(product => (
                <ProductInShoppingCart key={product.id} product={product} />
            ))}
            <div className='border-top p-2'>
                <h4>
                Total: <small>$ {total}.00</small>
                </h4>
                <Button>
                    Checkout
                </Button>
            </div>
        </div>

    );
};

export default UserShoppingCart;