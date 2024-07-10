import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackToTopCom from '../components/common/back-to-top-com';
import { get_cart_products } from '../redux/features/cart-slice';

const Wrapper = ({children}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cart_products())
  }, [dispatch])
  return (
    <>
     {children} 
     <BackToTopCom/>
    </>
  );
};

export default Wrapper;