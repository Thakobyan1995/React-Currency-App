import React from 'react';
import './Pagination.css'

const Pagination = ( {handlePaginationClick, totalPages, page} ) => {
    return (
        <div className="Pagination">

            <button
                onClick={() => handlePaginationClick('previous')}
                className="Pagination-button"
                disabled={page===1}>    
                &larr;
            </button>

            <span className="Pagination-info">page {page} of {totalPages}</span>

            <button
                onClick={() => handlePaginationClick('next')}
                className="Pagination-button"
                disabled={page ===totalPages}>
                &rarr;
            </button>
        </div>
    )

}

export default Pagination;