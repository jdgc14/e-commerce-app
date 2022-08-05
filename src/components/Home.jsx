import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsThunk } from '../store/slices/products.slice'
import Categories from './Categories';
import Filters from './Filters';
import InputProduct from './InputProduct';
import ProductCard from './ProductCard';

const Home = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    const token = window.localStorage.getItem('user')

    console.log(token)

    return (
        <div className='container my-5'>
            <div className='row'>
                <Filters/>
                <div className='col-lg-10 col-12 d-flex flex-wrap'>
                    {products.map((product) => (
                        <div key={product.id} className='col-12 col-sm-6 col-lg-4'>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;