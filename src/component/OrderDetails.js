import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../actions/orderActions';

const OrderDetails = () => {
  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Order Details</h2>
      {order.length === 0 ? (
        <p>Your order is empty</p>
      ) : (
        <div>
          <ul>
            {order.map(item => (
              <li key={item.name}>
                {item.name} x {item.quantity} - {item.price * item.quantity} RUB
                <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total price: {totalPrice} RUB</h3>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
