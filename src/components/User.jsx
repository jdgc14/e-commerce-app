import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {

    const user = useSelector(state => state.user)

    console.log(user)

    return (
        <div>
            <h2
                style={{ textTransform: 'capitalize' }}>
                Name: {user.firstName} {user.lastName}
            </h2>
            <h2>
                Email: {user.email}
            </h2>
            <h2>
                Phone: {user.phone}
            </h2>
        </div>
    );
};

export default User;