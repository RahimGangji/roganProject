import dynamic from 'next/dynamic';
import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_force_page, add_item_offset } from '../../../redux/features/filter-slice';
import Pagination from '../../../ui/pagination/pagination';
// import SingleProduct from './single-product';
const SingleProduct = dynamic(() => import('./single-product'), {
  suspense: true,
})

const ProductItems = ({ itemsPerPage, items, col_4, gutter, setShowing, pag_center }) => {
  const { forcePage, item_offset } = useSelector(state => state.filter);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(item_offset);
  const dispatch = useDispatch();
  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    if (currentItems && setShowing) {
      setShowing(currentItems.length)
    }
  }, [currentItems, setShowing])

  useEffect(() => {
    dispatch(add_item_offset(itemOffset));
  }, [dispatch, itemOffset]);

  useEffect(() => {
    setItemOffset(item_offset);
  }, [item_offset]);

  // handlePageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    dispatch(add_force_page(event.selected));
  };

  return (
    <>
      <div className="product-showcase">
        <div className={`row gutter-${gutter}`}>
          {currentItems && currentItems.map((product, i) => {
            return <div key={i} className={col_4 ? 'col-xl-3 col-lg-4 col-sm-6' : "col-xl-4 col-md-6"}>
              <Suspense fallback={`Loading product...`}>
                <SingleProduct product={product} />
              </Suspense>
            </div>
          })}
        </div>
      </div>
      {/* pagination start */}
      <div className={`theme-pagination-one text-${pag_center ? 'center' : 'start'} pt-15`}>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} focusPage={forcePage} />
      </div>
      {/* pagination end */}
    </>
  );
};

export default ProductItems;