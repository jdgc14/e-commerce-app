import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPurchasesByUserIdThunk} from '../store/slices/userPurchases.slice';
import PurchasedProducts from './PurchasedProducts';

const UserPurchases = () => {

    const dispatch = useDispatch()

    const userPurchases = useSelector(state => state.userPurchases)

    useEffect(() => {
        dispatch(getPurchasesByUserIdThunk())
    }, [])

    console.log(userPurchases)


    return (
        <div>
            Your Purchases:
            {userPurchases.map((purchase) => (
               <PurchasedProducts key={purchase.id} purchase={purchase} />
            ))}
        </div>
    );
};

export default UserPurchases;