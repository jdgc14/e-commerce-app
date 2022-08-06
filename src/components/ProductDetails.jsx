import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../styles/ProductDetails.css'
import Carousel from 'react-bootstrap/Carousel';
import { Badge, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import SimilarProducts from './SimilarProducts';
import { addToCartThunk } from '../store/slices/shoppingCart.slice';



const ProductDetails = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const goLogin = () => {
        navigate("/login")
    }

    const user = useSelector(state => state.user)

    const { id } = useParams()

    const products = useSelector(state => state.products)

    const [product, setProduct] = useState({})

    const getProductById = (id) => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/' + id)
            .then((res) => setProduct(res.data.data.product))
    }

    useEffect(() => {
        getProductById(id)
    }, [id])

    const productsByCategory = products.filter(productArray => productArray.category.name === product.category)

    const discount = 10

    const priceFicticious = Math.floor(Number(product.price) + Number(product.price) * (discount / 100))

    const [index, setIndex] = useState(0)

    const [quantity, setQuantity] = useState(1)

    const onSelectQuantity = (e) => {
        setQuantity(e.target.value)
    }

    const addToCart = () => {
        dispatch(addToCartThunk(product.id, quantity))
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className='container product-card mt-5 rounded'>
            {/* {id} */}
            <div className='row p-3 border-bottom'>
                <div className='col-12 col-md-2 d-flex flex-row flex-md-column gap-2 justify-content-center justify-content-md-start'>
                    {product.productImgs?.map((productImg, index) => (
                        <div key={productImg} className='thumbnail-container p-1 border border-dark rounded' onMouseEnter={() => handleSelect(index)}>
                            <img src={productImg} className='thumbnail-img' />
                        </div>
                    ))}
                </div>
                <div className='col-12 col-md-6 mt-md-5'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {product.productImgs?.map(productImg => (
                            <Carousel.Item key={productImg} className='img-container-details'>
                                <img
                                    className="d-block w-100 product-img"
                                    src={productImg}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className='col-12 col-md-4 border rounded border-dark p-3 py-4'>
                    <div className='text-secondary'>
                        <small className='pe-2 border-end'>
                            New
                        </small>
                        <small className='ps-2'>
                            {Number(product.price)} sold
                        </small>
                    </div>
                    <div className='mt-3'>
                        <h5>
                            {product.title}
                        </h5>
                        <Badge bg="light" className='bg-orange'>
                            BEST SELLER
                        </Badge>
                        <small className='text-primary ms-3'>
                            {product.id}° in {product.category}
                        </small>
                    </div>
                    <div className='mt-4'>
                        <small className='text-decoration-line-through'>
                            $ {priceFicticious}.00
                        </small>
                        <div className='d-flex gap-2'>
                            <h2>$ {product.price}</h2>
                            <small className='my-auto free-shipping'>{discount}% OFF</small>
                        </div>
                        <span className='badge deal-of-the-day'>
                            DEAL OF THE DAY
                        </span>
                    </div>
                    <div className='mt-4 text-success d-flex gap-3'>
                        <i class="fa-solid fa-truck-fast"></i>
                        <small className='free-shipping'>
                            Free shipping <i class="fa-solid fa-bolt"></i> FULL<br />
                        </small>
                    </div>
                    <div className='mt-3'>
                        <div className='text-success d-flex gap-3'>
                            <i class="fa-solid fa-rotate-left"></i>
                            <small>Free return</small>
                        </div>
                        <small className='text-secondary'>
                            You have 30 days from when you receive it.
                        </small>
                    </div>
                    <div className='mt-4'>
                        <span><strong>Available stock</strong></span>
                    </div>
                    <div className='mt-3'>
                        <div className='d-flex gap-2'>
                            <h6 className='my-auto'>Quantity:</h6>
                            <Form.Select onChange={(e) => onSelectQuantity(e)} aria-label="Default select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Form.Select>
                        </div>
                    </div>
                    {user ? (
                        <div className='mt-4 text-center'>
                            <Button
                                variant="primary"
                                className='col-10'
                                onClick={addToCart}>
                                Add to cart
                            </Button>
                        </div>
                    ) : (
                        <div className='mt-4 text-center'>
                            <Button
                                variant="primary"
                                className='col-10'
                                onClick={goLogin}>
                                Add to cart
                            </Button>
                        </div>
                    )}
                    <div className='mt-4'>
                        <div className='d-flex gap-2 text-secondary'>
                            <i class="fa-solid fa-shield my-auto"></i>
                            <small>
                                <strong className='text-primary'>Protected Purchase</strong>, receive the product you expected or we will refund your money.
                            </small>
                        </div>
                        <div className='d-flex gap-2 text-secondary mt-3'>
                            <i class="fa-solid fa-trophy"></i>
                            <small>
                                <strong className='text-primary'>E-commerce points</strong>. You add 85 points.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h5>
                    Description
                </h5>
                <p 
                    className='text-secondary'
                    style={{textAlign:'justify'}}>
                    {product.description}
                </p>
            </div>
            <SimilarProducts productsByCategory={productsByCategory} />
        </div>
    );
};

export default ProductDetails;