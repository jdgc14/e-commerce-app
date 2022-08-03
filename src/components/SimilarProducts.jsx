import React from 'react';

const SimilarProducts = ({ productsByCategory }) => {

    console.log(productsByCategory)

    return (
        <>
            Similiar Products
            {productsByCategory.map(product => (
                <div key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.category.name}</p>
                </div>
            ))}
        </>
    );
};

export default SimilarProducts;