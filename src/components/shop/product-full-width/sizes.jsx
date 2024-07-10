import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_force_page, add_item_offset, add_size } from '../../../redux/features/filter-slice';

const Sizes = ({ maxPrice }) => {
  const { sizes } = useSelector(state => state.filter);

  const product_sizes = ['M', 'L', 'XL', 'XXL'];
  const dispatch = useDispatch();
  const handleSize = (size) => {
    dispatch(add_size({ size, maxPrice }))
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  }
  return (
    <div className="single-block">
      <h4 className="sidebar-title">Size</h4>
      <ul className="size-filter clearfix">
        {product_sizes.map((size, i) => <li key={i} onClick={() => handleSize(size)}>
          <a className={sizes.includes(size) ? 'active' : ''} style={{ cursor: 'pointer' }}>{size}</a>
        </li>
        )}
      </ul>
    </div>
  );
};

export default Sizes;