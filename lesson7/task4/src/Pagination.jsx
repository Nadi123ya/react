import React from "react";

const Pagination = ({goPrev, goNext, currentPage, totalItems, itemsPerPage}) => {

    let isPrevPageAvailable;
    let isNextPageAvailable;

    return(
        <div className="pagination">
        <button className="btn">←</button>
        <span className="pagination__page">1</span>
        <button className="btn">→</button>
      </div>
    );
};

export default Pagination;
