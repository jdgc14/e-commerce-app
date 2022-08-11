import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const PurchaseDetails = ({ product }) => {

    const [image, setImage] = useState('')

    const getImage = () => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/' + product.id)
            .then(res => { setImage(res.data.data.product.productImgs[0]) })
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <>
            <div className='border-top border-dark p-3 d-flex flex-column flex-md-row justify-content-between'>
                <h6>{product.title}</h6>
                <div className='col-4 col-md-2 d-flex justify-content-between'>
                    <Badge bg="light" text="dark">
                        {product.productsInCart.quantity}
                    </Badge>
                    <small>$ {Number(product.price) * Number(product.productsInCart.quantity)}</small>
                </div>
            </div>
            <div className='d-flex justify-content-center p-2'>
                <Link to={`/product/${product.id}`}>
                    <img
                        src={image}
                        alt={product.title}
                        style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                </Link>
            </div>
        </>
    )
}

export default PurchaseDetails