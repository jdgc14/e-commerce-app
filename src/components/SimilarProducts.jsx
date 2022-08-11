import React from 'react';
import { Link } from 'react-router-dom';

const SimilarProducts = ({ productsByCategory }) => {

    return (
        <div className='my-5 rounded'>
            <h5>Similiar Products</h5>
            <div className='products-by-category-container d-flex gap-4'>
                {productsByCategory.map(product => (
                    <div
                        key={product.id}
                        className='col-6 col-md-3 bg-white my-3 text-center rounded border'
                        style={{ height: '26rem' }}>
                        <Link to={`/product/${product.id}`} className='link-product'>
                            <div className='img-container p-3 position-relative d-flex justify-content-center'>
                                <img className='img-product-card position-absolute img-transition' src={product.productImgs[1]} alt="" />
                                <img className='img-product-card position-absolute' src={product.productImgs[0]} alt="" />
                            </div>
                            <div className='border-top p-3 text-start'>
                                <div className='d-flex gap-2 flex-column flex-wrap'>
                                    <h5>$ {product.price}</h5>
                                    <small className='free-shipping'>
                                        Free shipping <i className="fa-solid fa-bolt"></i> FULL<br />
                                    </small>
                                    <h6 className='name-product-card col-10'>{product.title}</h6>
                                </div>
                            </div>
                        </Link >
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;