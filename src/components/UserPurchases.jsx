import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesByUserIdThunk } from '../store/slices/userPurchases.slice';
import PurchasedProducts from './PurchasedProducts';

const UserPurchases = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesByUserIdThunk())
    }, [])

    const userPurchases = useSelector(state => state.userPurchases)

    const isValid = userPurchases.length > 0

    return (
        <div 
            className='container mt-5 bg-white rounded p-3'
            style={{minHeight:'100vh'}}>
            {isValid ? (
                <div>
                    <h4>Your Purchases:</h4>
                    {userPurchases.map((purchase) => (
                        <PurchasedProducts key={purchase.id} purchase={purchase} />
                    ))}
                </div>
            ) : (
                <div className='text-center'>
                    <h4>You haven't bought anything yet.</h4>
                    <Link to='/' className='btn btn-primary'>Go Shopping</Link>
                </div>
            )}
            {/* <h4>Your Purchases:</h4>
            {userPurchases.map((purchase) => (
               <PurchasedProducts key={purchase.id} purchase={purchase} />
            ))} */}
        </div>
    );
};

export default UserPurchases;