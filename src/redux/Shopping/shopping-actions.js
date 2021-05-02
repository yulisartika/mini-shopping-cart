import axios from "axios";
import * as actionTypes from "./shopping-types";

export const getProducts = () => (dispatch) => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: response.data,
      });
    })
    .catch((err) => alert(err));
};

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQuantity = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity: value,
    },
  };
};

export const currentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

//use this if we want to render the current item in a new page
export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
