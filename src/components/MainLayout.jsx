import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const MainLayout = () => {

    const user = useSelector(state => state.user)

    if (user) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}

export default MainLayout