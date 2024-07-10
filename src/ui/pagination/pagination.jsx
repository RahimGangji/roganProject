import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({handlePageClick,pageCount,focusPage}) => {
  return (
    <ReactPaginate
      nextLabel={<><i className="flaticon-next-1"></i></>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      forcePage={focusPage}
      pageCount={pageCount}
      previousLabel={<><i className="flaticon-back-1"></i></>}
      pageClassName="page-items"
      pageLinkClassName="page-links"
      previousClassName="page-items"
      previousLinkClassName="page-links"
      nextClassName="page-items"
      nextLinkClassName="page-links"
      breakLabel="..."
      breakClassName="page-items"
      breakLinkClassName="page-links"
      containerClassName="paginasstions"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;