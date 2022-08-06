import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {

    const user = useSelector(state => state.user)

    return (
        <div
            className='container'
            style={{ minHeight: '100vh' }}>
            <div className='d-flex justify-content-center'>
                <div className='bg-white rounded p-3 py-5 mt-5 d-flex flex-column flex-md-row gap-5 col-8 col-md-6'>
                    <div>
                        <h5
                            style={{ textTransform: 'capitalize' }}>
                            Name: {user.firstName} {user.lastName}
                        </h5>
                        <h5>
                            Email: {user.email}
                        </h5>
                        <h5>
                            Phone: {user.phone}
                        </h5>
                    </div>
                    <div style={{ display: 'grid', placeContent: 'center' }}>
                        <i class="fa-solid fa-user logo-user"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;