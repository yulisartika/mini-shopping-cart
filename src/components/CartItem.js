import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  adjustQuantity,
} from "../redux/Shopping/shopping-actions";

const CartItem = ({ itemData }) => {
  const [quantityItems, setQuantityItems] = useState(itemData.quantity);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setQuantityItems(e.target.value);
    dispatch(adjustQuantity(itemData.id, e.target.value)); // don't use input here for the argument passed as sometimes it takes sometime to update
  };

  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={itemData.image}
        alt={itemData.title}
      />

      <div className="cartItem__details">
        <p className="details__title">{itemData.title}</p>
        <p className="details__desc">{itemData.description}</p>
        <p className="details__price">
          $ {(itemData.price * quantityItems).toFixed(2)}{" "}
        </p>
      </div>

      <div className="cartItem__actions">
        <div className="cartItem__qty">
          <div htmlFor="qty">
            <b>Quantity</b>
          </div>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={quantityItems}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(itemData.id))}
          className="actions__deleteItemBtn"
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
