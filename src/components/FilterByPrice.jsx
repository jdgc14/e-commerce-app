import React from 'react';

const FilterByPrice = () => {
    return (
        <div className='mt-5'>
            <h5>Price</h5>
            <div className='p-1'>
                <small className='filters-names'>Under $800.00</small> <br />
                <small className='filters-names'>$800.00 to $1.200.00</small> <br />
                <small className='filters-names'>$1.200.00 & Above</small> <br />
            </div>
        </div>
    );
};

export default FilterByPrice;