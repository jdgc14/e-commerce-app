import React from 'react'
import Categories from './Categories'
import FilterByPrice from './FilterByPrice'

const Filters = () => {
    return (
        <div className='col-12 col-lg-2 mt-lg-5 gap-5 d-flex flex-row flex-lg-column justify-content-end justify-content-lg-start'>
            <Categories />
            <FilterByPrice />
        </div>
    )
}

export default Filters