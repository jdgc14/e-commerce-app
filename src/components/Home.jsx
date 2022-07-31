import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllProductsThunk } from '../store/slices/products.slice'
import Categories from './Categories';
import InputProduct from './InputProduct';

const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getAllProductsThunk())
    }, [])


    return (
        <div>
            Home
            <Categories/>
            <InputProduct/>
            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/product/${product.id}`}>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Home;