/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./productItem.scss";
// Importing icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Importing lazyloading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ProductItem = () => {
  const toProductCatalogue = () => {
    window.location.replace("/catalogue");
  };
  return (
    <div className="container product_item">
      <div className="row">
        <div className="col-md-3 col-sm-6" onClick={() => toProductCatalogue()}>
          <div className="product-grid">
            <div className="product-image">
              <a href="#">
                <LazyLoadImage
                  className="pic-1"
                  effect="blur" // opacity | black-and-white
                  src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13937/138251/2018-spring-men-s-shirt-men-s-long-sleeved-cotton-shirt-youth-business-solid-color__78215.1544102574.jpg?c=2"
                />
                <LazyLoadImage
                  className="pic-2"
                  effect="blur" // opacity | black-and-white
                  src="https://static-01.daraz.com.np/p/087f228b22bd047c445dde64f1fba838.jpg"
                />
              </a>
              <ul className="social">
                <li>
                  <a href="" data-tip="Quick View">
                    <SearchIcon />
                  </a>
                </li>
                <li>
                  <a href="" data-tip="Add to Wishlist">
                    <FavoriteIcon />
                  </a>
                </li>
                <li>
                  <a href="" data-tip="Add to Cart">
                    <AddShoppingCartIcon />
                  </a>
                </li>
              </ul>
              <span className="product-new-label">Sale</span>
              <span className="product-discount-label">20%</span>
            </div>
            <ul className="rating d-flex align-items-center justify-content-center">
              <li className="fa fa-star"> </li>
              <li className="fa fa-star"></li>
              <li className="fa fa-star"> </li>
              <li className="fa fa-star"> </li>
              <li className="fa fa-star disable"></li>
            </ul>
            <div className="product-content">
              <h3 className="title">
                <a href="#">Men's Shirt</a>
              </h3>
              <div className="price">
                $16.00
                <span>$20.00</span>
              </div>
              <a className="add-to-cart" href="">
                {/* Here add to cart text */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
