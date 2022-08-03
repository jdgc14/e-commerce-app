import React, { useEffect, useState } from 'react';

const PurchasedProducts = ({ purchase }) => {

    const isValid = purchase.cart.products.length > 0

    const total = purchase.cart.products.map(product => Number(product.price)).reduce((a, b) => a + b, 0)



    console.log(total)

    return isValid && (
        <div>
            <h3>Order Number: {purchase.id}</h3>
            <h3>Order Date: {purchase.createdAt.substring(0,10)}</h3>
            <h3>Order Total: ${total}.00</h3>
            {purchase.cart.products.map((product) => (
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
};

export default PurchasedProducts;