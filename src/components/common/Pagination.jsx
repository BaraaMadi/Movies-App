import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'


const Pagination = ({ itemsCount, pageSize, onPageChaneg, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize); // (allItems / rows) -> (9/4) ~ 3 pages
  console.log(currentPage);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1); 
  // It is used to print the list of elements from the start given as a parameter to the end also a parameter.
  // _.range([start], stop, [step]) --> ( 1 , 4)
  // start at (1) & stop at (4) --> pages 1,2,3
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChaneg(page)} >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
 Pagination.prototype = {
   itemsCount: PropTypes.number.isRequired, // should be number & isRequired
   pageSize: PropTypes.number.isRequired,
   onPageChaneg: PropTypes.number.isRequired,
   currentPage: PropTypes.func.isRequired,
 };
export default Pagination;