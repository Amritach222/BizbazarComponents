import React from "react";
import ProductItem from "../components/product/ProductItem";
const landing = () => {
  return (
    <div className="container product_item mt-2">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default landing;
