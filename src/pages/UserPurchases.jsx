import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesByUserIdThunk } from '../store/slices/userPurchases.slice'

import LoadingPage from '../components/LoadingPage'
import PurchasedProducts from '../components/PurchasedProducts'

const UserPurchases = () => {

    window.scrollTo({ top: -100, behavior: 'smooth' })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPurchasesByUserIdThunk())
    }, [])

    const userPurchases = useSelector(state => state.userPurchases)

    const [page, setPage] = useState(1)

    const lastIndex = page * 4

    const firstIndex = lastIndex - 4

    const purchasesPaginated = userPurchases.slice(firstIndex, lastIndex)

    const lastPage = Math.ceil(userPurchases.length / 4)

    const numbers = []

    for (let i = page - 3; i <= page + 3; i++) {
        if (i > 0 && i <= lastPage) {
            numbers.push(i)
        }
    }

    const up = () => {
        setPage(page + 1)
    }

    const down = () => {
        setPage(page - 1)
    }

    const isLoading = useSelector(state => state.isLoading)

    const isValid = userPurchases.length > 0

    return (
        <>
            {isLoading ? <LoadingPage /> : (
                <div>
                    <div
                        className='container mt-5 bg-white rounded p-3'
                        style={{ minHeight: '100vh' }}>
                        {isValid ? (
                            <div>
                                <h4>Your Purchases:</h4>
                                {purchasesPaginated.map((purchase) => (
                                    <PurchasedProducts key={purchase.id} purchase={purchase} />
                                ))}
                            </div>
                        ) : (
                            <div className='text-center'>
                                <h4>You haven't bought anything yet.</h4>
                                <Link to='/' className='btn btn-primary'>Go Shopping</Link>
                            </div>
                        )}
                    </div>
                    <div className='d-flex p-4 mt-3 justify-content-evenly'>
                        {page !== 1 && (
                            <Button variant="primary" onClick={down} className={`p-2 rounded`}>
                                <i className="fa-solid fa-angle-left"></i>
                            </Button>
                        )}
                        {numbers.map(number => (
                            <Button key={number} onClick={() => setPage(number)} variant="primary" className={`p-2 rounded`}>
                                {number}
                            </Button>

                        ))}
                        {(page !== lastPage && lastPage !== 0) && (
                            <Button variant="primary" onClick={up} className={`p-2 rounded`}>
                                <i className="fa-solid fa-angle-right"></i>
                            </Button>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default UserPurchases