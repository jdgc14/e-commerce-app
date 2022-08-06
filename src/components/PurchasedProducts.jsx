import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';


const PurchasedProducts = ({ purchase }) => {

    const isValid = purchase.cart.products.length > 0

    const total = purchase.cart.products.map(product => Number(product.price) * Number(product.productsInCart.quantity)).reduce((a, b) => a + b, 0)

    return isValid && (
        <div className='border border-dark border-2 rounded my-5 text-secondary'>
            <div className='p-2'>
                <div className='my-2 d-flex justify-content-between'>
                    <Badge bg="primary">Order Number: {purchase.id}</Badge>
                    <Badge bg="primary">Order Date: {purchase.createdAt.substring(0, 10)}</Badge>
                </div>
                <h6>Order Total: $ {total}.00</h6>
            </div>
            {purchase.cart.products.map((product) => (
                <div key={product.id} className='my-2 border-top border-dark p-3 d-flex flex-column flex-md-row justify-content-between'>
                    <h6>{product.title}</h6>
                    <div className='col-4 col-md-2 d-flex justify-content-between'>
                        <Badge bg="light" text="dark">
                            {product.productsInCart.quantity}
                        </Badge>
                        <small>$ {Number(product.price) * Number(product.productsInCart.quantity)}</small>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default PurchasedProducts;