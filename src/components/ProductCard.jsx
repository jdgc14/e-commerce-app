import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const isOnSale = true

    const discount = 10

    const priceFicticious = Math.floor(Number(product.price) + Number(product.price) * (discount / 100))

    return (
        <div
            className='col-11 bg-white mt-5 text-center rounded border m-auto'
            style={{ height: '26rem' }}>
            <Link to={`/product/${product.id}`} className='link-product'>
                <div className='img-container p-3 position-relative d-flex justify-content-center'>
                    {/* <LoadingImg/> */}
                    <img className='img-product-card position-absolute img-transition' src={product.productImgs[1]} alt="" />
                    <img className='img-product-card position-absolute' src={product.productImgs[0]} alt="" />
                </div>
                <div className='border-top p-4 text-start position-relative'>
                    {isOnSale && <span
                        className='badge deal-of-the-day position-absolute'
                        style={{ top: '3px', left: '23px' }}>
                        DEAL OF THE DAY</span>}
                    {discount > 5 && <small className='text-decoration-line-through'>$ {priceFicticious}.00</small>}
                    <div className='d-flex gap-2'>
                        <h3>$ {product.price}</h3>
                        {discount > 5 && <small className='my-auto free-shipping'>{discount}% OFF</small>}
                    </div>
                    <small className='free-shipping'>
                        Free shipping <i className="fa-solid fa-bolt"></i> FULL<br />
                    </small>
                    <h6 className='name-product-card'>{product.title}</h6>
                </div>
            </Link >
        </div>
    );
};

export default ProductCard;