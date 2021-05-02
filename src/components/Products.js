import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/Shopping/shopping-actions";
import Product from "./Product";

const Products = () => {
  const { products } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="products">
      {products.length !== 0 &&
        products.map((item) => <Product key={item.id} productData={item} />)}
    </div>
  );
};

export default Products;
