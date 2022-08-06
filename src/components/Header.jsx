import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputProduct from './InputProduct';
import NavBar from './NavBar';

const Header = () => {

    const  navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    return (
        <header className='bg-yellow-meli py-3'>
            <div className='container'>
                <div className='row'>
                    <div onClick={goToHome} 
                        className='col-6 col-md-4 col-lg-3 text-blue-meli d-flex gap-2 home-logo'>
                        <div className='text-center'>
                            <i class="fa-solid fa-handshake-simple logo-meli"></i>
                            {/* <i class="fa-solid fa-handshake-simple logo-meli"></i> */}
                        </div>
                        <h5>Free<br />E-commerce</h5>
                    </div>
                    <div className='col-12 col-md-5'>
                        <InputProduct />
                    </div>
                </div>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;