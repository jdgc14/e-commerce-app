import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductThunk, addQuantityThunk, subtractQuantityThunk } from '../store/slices/shoppingCart.slice'

const ProductInShoppingCart = ({ product }) => {

    const dispatch = useDispatch()

    const subtotal = product.productsInCart.quantity * product.price

    const products = useSelector(state => state.products)

    const findProductImg = (id) => {
        const productInArray = products.find(product => product.id == id)
        return productInArray.productImgs[0]
    }

    const productImg = findProductImg(product.id)

    const deleteProduct = () => {
        dispatch(removeProductThunk(product.id))
    }

    const addQuantityProduct = () => {
        dispatch(addQuantityThunk(product.id, product.productsInCart.quantity))
    }

    const subtractQuantityProduct = () => {
        dispatch(subtractQuantityThunk(product.id, product.productsInCart.quantity))
    }

    return (
        <div className='border-top my-2 p-3 position-relative'>
            <div onClick={deleteProduct}
                className='position-absolute text-danger'
                style={{ top: '5px', right: '10px' }}>
                <Button variant='danger' size='sm'>
                    <i className="fa-solid fa-trash"></i>
                </Button>
            </div>
            <small>{product.brand}</small>
            <h6>{product.title}</h6>
            <h6>Subtotal: $ {subtotal}.00</h6>
            <div className='col-6 p-2 m-auto'>
                <img
                    src={productImg}
                    alt={product.title}
                    className='img-product-shopping-cart m-auto' />
            </div>
            <div className='d-flex justify-content-center gap-3'>
                <Button onClick={subtractQuantityProduct}>
                    <i className="fa-solid fa-circle-minus"></i>
                </Button>
                <Button disabled>
                    {product.productsInCart.quantity}
                </Button>
                <Button onClick={addQuantityProduct}>
                    <i className="fa-solid fa-circle-plus"></i>
                </Button>
            </div>
        </div>
    )
}

export default ProductInShoppingCart