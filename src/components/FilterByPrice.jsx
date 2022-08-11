import React from 'react'
import { useDispatch } from 'react-redux'
import { filterProductsByPriceThunk } from '../store/slices/products.slice'

const FilterByPrice = () => {

    const dispatch = useDispatch()

    return (
        <div className='mt-lg-5'>
            <h5>Price</h5>
            <div className='p-2'>
                <small
                    onClick={() => dispatch(filterProductsByPriceThunk({ minPrice: 0, maxPrice: 800 }))}
                    className='filters-names'>
                    Under $800.00
                </small> <br />
                <small
                    onClick={() => dispatch(filterProductsByPriceThunk({ minPrice: 800, maxPrice: 1200 }))}
                    className='filters-names'>
                    $800.00 to $1.200.00
                </small> <br />
                <small
                    onClick={() => dispatch(filterProductsByPriceThunk({ minPrice: 1200, maxPrice: 999999999 }))}
                    className='filters-names'>
                    $1.200.00 & Above
                </small> <br />
            </div>
        </div>
    )
}

export default FilterByPrice