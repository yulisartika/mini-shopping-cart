import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const { cart } = useSelector((state) => state.shop);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice, setTotalItems, setTotalPrice]);

  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>

      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: {totalItems} items</span>
          <span>$ {totalPrice.toFixed(2)}</span>
        </div>
        <button className="summary__checkoutBtn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
