import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { getProductsByNameThunk } from '../store/slices/products.slice'

const InputProduct = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const [nameProduct, setNameProduct] = useState('')

    const submit = (e) => {
        e.preventDefault()
        dispatch(getProductsByNameThunk(nameProduct))
    }

    console.log(nameProduct)

    return (
        <Form onSubmit={(e) => submit(e)}>
            <InputGroup className="my-3">
                <Form.Control
                    onChange={(e) => {
                        setNameProduct(e.target.value)
                        dispatch(getProductsByNameThunk(nameProduct))
                    }}
                    placeholder="Search"
                    aria-label="Search product"
                    aria-describedby="inputGroup-sizing-default"
                />
                {/* <InputGroup.Text id="inputGroup-sizing-default">
                Default
            </InputGroup.Text> */}
                <Button type='submit' variant="outline-secondary" id="button-addon2">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </Button>
            </InputGroup>
        </Form>
    )
};

export default InputProduct;