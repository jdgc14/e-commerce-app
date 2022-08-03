import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser, setToken } from '../store/slices/user.slice';

const Login = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const user = useSelector(state => state.user)

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    // const [user, setUser] = useState({})

    const submit = (data) => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then((res) => {
                dispatch(setUser(res.data.data.user))
                dispatch(setToken(res.data.data.token))
            })
            .catch((err) => console.log(err))
    }


    console.log(user)

    return (
        <>
            <Form onSubmit={handleSubmit(submit)}>
                <h3>Hi! Enter your email and your password</h3>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Enter email" required {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" placeholder="Password" required {...register('password')} />
                </Form.Group>
                <Button variant="primary" type="submit" className="rounded">
                    Log In
                </Button>
            </Form>

            <Link to='/signup'>

                <Button variant="primary" className="rounded mt-5">
                    Create User
                </Button>
            </Link>
        </>
    );
};

export default Login;