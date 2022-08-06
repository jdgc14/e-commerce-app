import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser, setToken } from '../store/slices/user.slice';

const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { register, handleSubmit } = useForm()

    const user = useSelector(state => state.user)

    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    const [isInvalid, setIsInvalid] = useState(false)

    const submit = (data) => {
        axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
            .then((res) => {
                setIsInvalid(false)
                dispatch(setUser(res.data.data.user))
                dispatch(setToken(res.data.data.token))
                navigate('/')
            })
            .catch(() => setIsInvalid(true))
    }

    return (
        <div className='d-flex justify-content-center p-5'>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4 text-center bg-white p-5 rounded'>
                <Form onSubmit={handleSubmit(submit)}>
                    <h5>Hi! Enter your email and your password</h5>
                    <div className='bg-info p-4 text-start rounded'>
                        <h6 className='text-center'>Test data</h6>
                        <small><i class="fa-solid fa-envelope"></i> user5@gmail.com</small> <br />
                        <small><i class="fa-solid fa-lock"></i> 1234abcd</small>
                    </div>
                    <Form.Group className="my-3" controlId="email">
                        <Form.Control type="email" placeholder="Enter email" required {...register('email')} />
                    </Form.Group>

                    <Form.Group className="my-3" controlId="password">
                        <Form.Control type="password" placeholder="Password" required {...register('password')} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="rounded col-11">
                        Log In
                    </Button>
                </Form>
                {isInvalid && (
                    <div className='text-secondary'>
                        <small>Invalid credentials</small>
                    </div>
                )}
                <Link to='/signup'>
                    <Button variant="outline-primary" className="rounded mt-5">
                        Create User
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Login;