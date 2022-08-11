import Spinner from 'react-bootstrap/Spinner';

function LoadingPage() {
    return (
        <div className='loading-page'>
            <Spinner animation="border" variant="warning" />
        </div>
    )
}

export default LoadingPage;