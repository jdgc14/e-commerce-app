import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import PurchaseDetails from './PurchaseDetails';


const PurchasedProducts = ({ purchase }) => {

    const date = new Date(purchase.createdAt)

    const isValid = purchase.cart.products.length > 0

    const total = purchase.cart.products.map(product => Number(product.price) * Number(product.productsInCart.quantity)).reduce((a, b) => a + b, 0)

    return isValid && (
        <div className='border border-dark border-2 rounded my-5 text-secondary'>
            <div className='p-2'>
                <div className='my-2 d-flex justify-content-between'>
                    <Badge bg="primary">Order Number: {purchase.id}</Badge>
                    {/* <Badge bg="primary">Order Date: {purchase.createdAt.toLocaleDateString()}</Badge> */}
                    <Badge bg="primary">Order Date: {date.toDateString()}</Badge>
                </div>
                <h6>Order Total: $ {total}.00</h6>
            </div>
            {purchase.cart.products.map(product => (
                <PurchaseDetails key={product.id} product={product}/>
            ))}
        </div>
    )
};

export default PurchasedProducts;