import React from 'react';



const UserShoppingCart = ( {cartIsVisible} ) => {

    const isVisible = cartIsVisible

    return (
        isVisible && (
            <div className='d-flex justify-content-end'>
                <div className='col-4'>
                    UserShoppingCart
                </div>
            </div>
        )
    );
};

export default UserShoppingCart;