import React, { useEffect, useState } from 'react';
import Slider from 'react-rangeslider';
import { useDispatch } from 'react-redux';
import { add_force_page, add_item_offset, getPrice } from '../../../redux/features/filter-slice';

const PriceFilter = ({ maxPrice }) => {
  const [price, setPrice] = useState(maxPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrice(price))
    dispatch(add_item_offset(0));
    dispatch(add_force_page(0));
  }, [dispatch, price])
  // handlePriceChange
  const handlePriceChange = value => {
    setPrice(value);
  }
  return (
    <div className="price-ranger">
      <div id="slider-range"></div>
      <div className="ranger-min-max-block">
        <ul className="clearfix">
          <Slider
            value={price}
            max={maxPrice}
            tooltip={false}
            orientation="horizontal"
            onChange={(val) => handlePriceChange(val)}
          />
          <li>Price:</li>
          <li><input type="text" defaultValue={`$${0}`} className="min" readOnly /></li>
          <li>-</li>
          <li><input type="text" value={`$${price}`} className="max" readOnly /></li>
        </ul>
      </div>
    </div>
  );
};

export default PriceFilter;