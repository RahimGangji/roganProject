import React from 'react';
import { useDispatch } from 'react-redux';
import { add_force_page, add_item_offset, add_search_value } from '../../../redux/features/filter-slice';

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleSearchInput = e => {
    dispatch(add_search_value(e.target.value));
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  }
  return (
    <form onSubmit={handleSubmit} className="sidebar-search">
      <input onChange={handleSearchInput} type="text" placeholder="Search" />
      <button><i className="fa fa-search" aria-hidden="true"></i></button>
    </form>
  );
};

export default SearchForm;