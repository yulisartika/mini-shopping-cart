import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { addToCart } from "../redux/Shopping/shopping-actions";

const SingleItem = (props) => {
  const { productData } = props;
  const dispatch = useDispatch();

  // later, try getting the state from the local storage
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Link to="/cart">
          <img
            className="cart__image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
        </Link>
      </Modal.Header>

      <Modal.Body>
        <div className="singleItem">
          <img
            className="singleItem__image"
            src={productData.image}
            alt={productData.title}
          />
          <div className="singleItem__details">
            <p className="details__title">{productData.title}</p>
            <p className="details__description">{productData.description}</p>
            <p className="details__price">$ {productData.price}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => dispatch(addToCart(productData.id))}
          className="details__addBtn"
        >
          Add To Cart
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SingleItem;
