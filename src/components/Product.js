import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/Shopping/shopping-actions";
import SingleItem from "./SingleItem";

const Product = ({ productData }) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  // a note if we want to put the logic here
  // const dispatchAddToCart = (id) => {
  //   dispatch(addToCart(id));
  // };

  return (
    <div className="product">
      <img
        className="product__image"
        src={productData.image}
        alt={productData.title}
      />

      <div className="product__details">
        <p className="details__title">{productData.title}</p>
        <p className="details__desc">{productData.description}</p>
        <p className="details__price">$ {productData.price}</p>
      </div>

      <div className="product__buttons">
        <button
          // onClick={() => dispatch(loadCurrentItem(productData))}
          onClick={() => setModalShow(true)}
          className="buttons__btn buttons__view"
        >
          View Item
        </button>

        <button
          className="buttons__btn buttons__add"
          onClick={() => dispatch(addToCart(productData.id))}
        >
          Add to Cart
        </button>
      </div>

      <SingleItem
        show={modalShow}
        onHide={() => setModalShow(false)}
        productData={productData}
      />
    </div>
  );
};

export default Product;
