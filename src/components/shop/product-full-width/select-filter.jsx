import React from 'react';
import { useDispatch } from 'react-redux';
import { add_force_page, add_item_offset, add_select_item } from '../../../redux/features/filter-slice';

const SelectFilter = () => {
  const dispatch = useDispatch();
  const handleSelectedFilter = (e) => {
    dispatch(add_select_item(e.target.value));
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  }
  return (
    <select className="theme-select-menu" onChange={handleSelectedFilter}>
      <option>Filtering</option>
      <option>Popularity</option>
      <option>Trending items</option>
      <option>Newest items</option>
      <option>Price: low to high</option>
      <option>Price: high to low</option>
    </select>
  );
};

export default SelectFilter;