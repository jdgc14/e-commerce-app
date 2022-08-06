import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getShoppingCartThunk } from '../store/slices/shoppingCart.slice';
import { purchaseCartThunk } from '../store/slices/userPurchases.slice';
import ProductInShoppingCart from './ProductInShoppingCart';



const UserShoppingCart = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const shoppingCart = useSelector(state => state.shoppingCart.products)

    const total = shoppingCart.reduce((acc, product) => {
        return acc + product.productsInCart.quantity * product.price
    }, 0)

    const purchase = () => {
        dispatch(purchaseCartThunk())
        // dispatch(getShoppingCartThunk())
        navigate('/purchases')
    }

    return (
        <div className='' style={{ minWidth: '250px' }}>
            <h5 className='text-center'>Shopping Cart</h5>
            {shoppingCart.map(product => (
                <ProductInShoppingCart key={product.id} product={product} />
            ))}
            <div className='border-top p-2'>
                <h4>
                    Total: <small>$ {total}.00</small>
                </h4>
                <Button onClick={purchase}>
                    Checkout
                </Button>
            </div>
        </div>

    );
};

export default UserShoppingCart;