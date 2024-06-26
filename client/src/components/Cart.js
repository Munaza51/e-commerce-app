import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../redux/slices/cartSlice';
import Checkout from './Checkout';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchCart(user.id));
    }
  }, [dispatch, user]);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.product.name}</p>
            <p>{item.quantity}</p>
          </div>
        ))}
      </div>
      <Checkout />
    </div>
  );
};

export default Cart;
