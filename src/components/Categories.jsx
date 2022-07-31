import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getProductsByCategorieThunk } from '../store/slices/products.slice'

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

    console.log(categories)



    return (
        <>
            <ListGroup>
                {categories.map((category) => (
                    <ListGroup.Item key={category.id}>
                        <Button onClick={() => dispatch(getProductsByCategorieThunk(category.id))}>
                            {category.name}
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};

export default Categories;