import React from "react";
import data from "../data";
import ProductItem from "../components/product/ProductItem";
const all_product = data.catalogue.product;
const landing = () => {
  return (
    <div className="container product_item mt-2">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          {all_product.map((item, index) => {
            return <ProductItem key={index} product={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default landing;
