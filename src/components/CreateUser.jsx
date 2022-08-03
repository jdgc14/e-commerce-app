import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';

const CreateUser = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()

    const submit = (data) => {
        console.log(data)
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <h3>Create a user</h3>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Control type="text" placeholder="First Name" {...register('firstName', {
                    required: true
                })} />
                {errors.lastName &&
                    <small className="text-danger mt-1">
                        First Name is required
                    </small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Control type="text" placeholder="Last Name" {...register('lastName', {
                    required: true
                })} />
                {errors.lastName &&
                    <small className="text-danger mt-1">
                        Last Name is required
                    </small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Control type="email" placeholder="Email"  {...register('email', {
                    required: true
                })} />
                {errors.email &&
                    <small className="text-danger mt-1">
                        Email is required
                    </small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Control type="password" placeholder="Password" {...register('password', {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /^(?=.*\d)(?=.*[a-zA-Z])\w{8,}$/
                })} />
                {errors.password &&
                    <small className="text-danger mt-1">
                        Password must be at least 8 and not more 20 characters long and contain at least one letter and one number
                    </small>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Control type="text" placeholder="Phone" {...register('phone', {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                })} />
                {errors.phone &&
                    <small className="text-danger mt-1">
                        Must be 10 digits long
                    </small>}
            </Form.Group>

            <Button variant="primary" type="submit" className="rounded">
                Sing Up
            </Button>
        </Form>

    );
};

export default CreateUser;