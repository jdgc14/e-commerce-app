import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useDispatch } from 'react-redux'
import { getProductsByNameThunk } from '../store/slices/products.slice'

const InputProduct = () => {

    const dispatch = useDispatch()

    const [nameProduct, setNameProduct] = useState('')

    const submit = (e) => {
        e.preventDefault()
        dispatch(getProductsByNameThunk(nameProduct))
    }

    return (
        <Form onSubmit={(e) => submit(e)}>
            <InputGroup className="rounded">
                <Form.Control
                    onChange={(e) => {
                        setNameProduct(e.target.value)
                        dispatch(getProductsByNameThunk(nameProduct))
                    }}
                    placeholder="Search products..."
                    aria-label="Search product"
                    aria-describedby="inputGroup-sizing-default"
                />
                <Button variant="light">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </InputGroup>
        </Form>
    )
};

export default InputProduct;