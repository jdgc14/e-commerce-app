import React from 'react';
import Categories from './Categories';
import FilterByPrice from './FilterByPrice';

const Filters = () => {
    return (
        <div className='col-lg-2 col-12 mt-5'>
            <Categories/>
            <FilterByPrice/>
        </div>
    );
};

export default Filters;