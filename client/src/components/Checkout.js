import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/slices/orderSlice';

const Checkout = () => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    dispatch(createOrder(token));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <StripeCheckout
        stripeKey="your_stripe_public_key"
        token={handleToken}
        name="E-commerce App"
        amount={1000} // Amount in cents
      />
    </div>
  );
};

export default Checkout;
