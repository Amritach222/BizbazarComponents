/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./productItem.scss";
import data from "../../data";
// Importing icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
// Importing lazyloading
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Share from "../Share/Share";
import QuickView from './QuickView/QuickView'
const multi_images = data.catalogue.product.product_color[0].images;
const ProductItem = () => {
  const [multiImage, setMultiImage] = useState(multi_images[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const toProductCatalogue = (e) => {
    e.preventDefault();
    window.location.replace("/catalogue");
  };
  //this is to handle multiimage
  const handleMultiImage = (image, index) => {
    setMultiImage(image);
    setImageIndex(index);
  };
  const handleMouseLeave = () => {
    setMultiImage(multi_images[0]);
    setImageIndex(0);
  };
  return (
    <div className="product-item">
    <div className="product-grid">
      <div className="product-image" onClick={(e) => toProductCatalogue(e)}>
        <div className="row position-absolute multi-image-row h-100 w-100 m-0 p-0 ">
          {multi_images.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index === imageIndex
                    ? "col multi-image-view-border m-0 p-0"
                    : "col m-0 p-0 multi-image-view-border-transparent"
                }
                onMouseEnter={() => handleMultiImage(image, index)}
                onMouseOut={() => handleMouseLeave()}
              ></div>
            );
          })}
        </div>
        <a href="#">
          <LazyLoadImage
            className="pic-1"
            effect="blur" // opacity | black-and-white
            src={multiImage}
          />
        </a>
        <ul className="social">
          <li>
            <a
              href=""
              data-tip="Quick View"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
            >
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
        <span className="product-new-label">
          {" "}
          <Share />
        </span>
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
      <a
      href=""
      data-tip="Quick View"
      data-bs-toggle="modal"
      data-bs-target="#quickViewModal"
    >
      <SearchIcon />
    </a>
   
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
    <QuickView/>
    </div>
  );
};

export default ProductItem;
