import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getProductsByCategorieThunk, getAllProductsThunk } from '../store/slices/products.slice'
import Dropdown from 'react-bootstrap/Dropdown';


const Categories = () => {

    const dispatch = useDispatch()

    const [categories, setCategories] = useState([])

    const getCategories = () => {
        axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
            .then((res) => setCategories(res.data.data.categories))
    }

    useEffect(() => {
        getCategories()
    }, [])

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

// <Dropdown>
// <Dropdown.Toggle variant="light">
//     Categories
// </Dropdown.Toggle>
// <Dropdown.Menu>
//     <Dropdown.Item className='bg-transparent border-0 p-1'>
//         <h6 onClick={() => dispatch(getAllProductsThunk())}
//             className='filters-names'>
//             All</h6>
//     </Dropdown.Item>
//     {categories.map((category) => (
//         <Dropdown.Item key={category.id} className='bg-transparent border-0 p-1'>
//             <h6 onClick={() => dispatch(getProductsByCategorieThunk(category.id))}
//                 className='filters-names'>
//                 {category.name}
//             </h6>
//         </Dropdown.Item>
//     ))}
// </Dropdown.Menu>
// </Dropdown>
    );
};

export default Categories;