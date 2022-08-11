import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategorieThunk, getAllProductsThunk } from '../store/slices/products.slice'


const Categories = () => {

    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories)

    // const [categories, setCategories] = useState([])

    // const getCategories = () => {
    //     axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
    //         .then((res) => setCategories(res.data.data.categories))
    // }

    // useEffect(() => {
    //     getCategories()
    // }, [])

    return (
        <ListGroup variant='flush' className='bg-transparent'>
            <h5>Categories</h5>
            <ListGroup.Item className='bg-transparent border-0 p-1'>
                <h6 onClick={() => dispatch(getAllProductsThunk())}
                    className='filters-names'>
                    All</h6>
            </ListGroup.Item>
            {categories.map((category) => (
                <ListGroup.Item key={category.id} className='bg-transparent border-0 p-1'>
                    <h6 onClick={() => dispatch(getProductsByCategorieThunk(category.id))}
                        className='filters-names'>
                        {category.name}
                    </h6>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default Categories