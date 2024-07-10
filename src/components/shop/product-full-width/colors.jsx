import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_color, add_force_page, add_item_offset } from '../../../redux/features/filter-slice';

const Colors = ({ maxPrice }) => {
  const { colors } = useSelector(state => state.filter);

  const product_colors = ['gray', 'green', 'red', 'yellow', 'purple'];
  const dispatch = useDispatch();
  const handleColors = (color) => {
    dispatch(add_color({ color, maxPrice }))
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  }

  return (
    <div className="single-block">
      <h4 className="sidebar-title">Color</h4>
      <ul className="color-filter clearfix">
        {product_colors.map((color, i) => <li key={i} onClick={() => handleColors(color)}>
          <a className={colors.includes(color) ? 'active' : ''} style={{ cursor: 'pointer' }}></a>
        </li>)}
      </ul>
    </div>
  );
};

export default Colors;