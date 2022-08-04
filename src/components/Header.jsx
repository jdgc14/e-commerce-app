import React from 'react';
import InputProduct from './InputProduct';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header className='bg-yellow-meli row' style={{ minHeight: '10rem' }}>
            <NavBar />
            <div className='col-6'>
                <InputProduct />
            </div>
        </header>
    );
};

export default Header;