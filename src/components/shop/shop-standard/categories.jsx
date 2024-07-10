import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_force_page, add_item_offset, getCategories } from '../../../redux/features/filter-slice';

const Categories = ({ products, hide_length = false, maxPrice }) => {
  const { categories } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  let content = null;

  if (products?.length > 0) {
    const all_categories = [...new Set(products.map(p => p.category))];
    // handleCategory
    const handleCategory = (category) => {
      dispatch(getCategories({category,maxPrice}))
      dispatch(add_item_offset(0));
      dispatch(add_force_page(0));
    }

    content = all_categories.map((category, i) => <li key={i}
      className={categories.includes(category) ? 'active' : ''}>
      <a style={{ cursor: 'pointer' }} onClick={() => handleCategory(category)}>
        {category} {!hide_length && <span>({products.filter(product => product.category === category)?.length})</span>}
      </a>
    </li>)
  }

  return (
    <ul className="list-item">
      {content}
    </ul>
  );
};

export default Categories;