import React from 'react'
import { useSelector } from 'react-redux'
import Filters from './Filters';
import ProductCard from './ProductCard';

const Home = () => {

    const products = useSelector(state => state.products)

    return (
        <div className='container my-5'>
            <div className='row'>
                <Filters />
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