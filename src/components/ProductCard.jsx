import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const isOnSale = Boolean(Math.random() < 0.5)

    const discount = Math.floor(Math.random() * (15 - 0))

    const priceFicticious = product.price - (product.price * (discount / 100))

    console.log(priceFicticious)
    // const isBestSeller = Boolean(Math.random() < 0.5)

    return (
        <div
            className='col-10 bg-white mt-5 text-center rounded border'
            style={{ height: '25rem' }}>
            <Link to={`/product/${product.id}`} className='link-product'>
                <div className='img-container p-3'>
                    <img className='img-product-card' src={product.productImgs[0]} alt="" />
                </div>
                <div className='border-top p-4 text-start position-relative'>
                    {isOnSale && <span
                        className='badge deal-of-the-day position-absolute'
                        style={{ top: '3px', left: '23px' }}>
                        DEAL OF THE DAY</span>}
                    <h3>$ {product.price}</h3>
                    <small className='free-shipping'>
                        Free shipping <i class="fa-solid fa-bolt"></i> FULL<br />
                    </small>
                    <h6>{product.title}</h6>
                </div>
            </Link >
        </div>
    );
};

export default ProductCard;