const getConfig = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    const {token} = user
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

// const getConfig = () => ({
//     headers: {
//         Authorization: `Bearer ${window.localStorage.getItem('token')}`,
//     }
// })

export default getConfig