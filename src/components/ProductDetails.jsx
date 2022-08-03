import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SimilarProducts from './SimilarProducts';

const ProductDetails = () => {

    const { id } = useParams()

    const products = useSelector(state => state.products)

    const [product, setProduct] = useState({})

    const getProductById = (id) => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/' + id)
            .then((res) => setProduct(res.data.data.product))
    }

    // const getProductById = (id) => {
    //     setProduct(products.find(product => product.id == Number(id)))
    // }

    useEffect(() => {
        getProductById(id)
    }, [id])

    const productsByCategory = products.filter(productArray => productArray.category.name === product.category)

    console.log(productsByCategory)

    // const categoryName = product.category

    // console.log(categoryName)

    return (
        <div>
            {id}
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <SimilarProducts productsByCategory={productsByCategory} />
        </div>
    );
};

export default ProductDetails;