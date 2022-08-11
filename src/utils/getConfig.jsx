const getConfig = () => {
    if (JSON.parse(window.localStorage.getItem('user'))) {
        const user = JSON.parse(window.localStorage.getItem('user'))
        const { token } = user
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }
}

export default getConfig