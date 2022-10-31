import React, { useState } from "react";
import "./product_catalogue.scss";
import DescandReviews from "../DescandReviews";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// Importing data from data js file
import data from "../../../data";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReactImageMagnify from "react-image-magnify";
// Importing lazyload package 
import { LazyLoadImage } from "react-lazy-load-image-component";
const rec_product_items = [1, 2, 3, 4, 5];
const ProductCatalogue = () => {
  const { product_images } = data.catalogue.product;
  //Create useState to set the image tp the image container
  const [pimage, setPimage] = useState(product_images[0]);
  return (
    <div className="container">
      <section className=" bg-white shadow-sm">
        <div className="container">
          <div className="row">
            <aside className="col-lg-6 product_image_container">
              <article className="gallery-wrap gallery-vertical d-flex flex-row-reverse">
                <div className="fluid__image-container card">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: pimage,
                        sizes:
                          "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      },
                      largeImage: {
                        src: pimage,
                        width: 1200,
                        height: 1800,
                      },

                      shouldUsePositiveSpaceLens: true,
                    }}
                  />
                </div>
                <div className="thumbs-wrap mb-3" style={{ float: "left" }}>
                  {product_images.map((image, index) => {
                    console.log("Hello Image");
                    return (
                      <a href="#" className="item-thumb">
                        <LazyLoadImage
                          key={index}
                          width="60"
                          height="60"
                          src={image}
                          effect='blur' // opacity | black-and-white
                          loading="lazy"
                          onClick={() => setPimage(image)}
                        />
                      </a>
                    );
                  })}
                </div>{" "}
              </article>{" "}
            </aside>{" "}
            <div className="col-lg-6">
              <article className="ps-lg-3">
                {" "}
                <h4 className="title text-dark">
                  Mens Long Sleeve T-shirt Cotton Base
                  <br /> Layer Slim Muscle
                </h4>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
                      <LazyLoadImage
                        loading="lazy"
                        effect='blur' // opacity | black-and-white
                        src="bootstrap5-ecommerce/images/misc/stars-active.svg"
                        alt=""
                      />
                    </li>{" "}
                    <li>
                      <LazyLoadImage
                        loading="lazy"
                        effect='blur' // opacity | black-and-white
                        src="bootstrap5-ecommerce/images/misc/starts-disable.svg"
                        alt=""
                      />
                    </li>{" "}
                  </ul>{" "}
                  <b className="label-rating text-warning"> 4.5</b>{" "}
                  <i className="dot"></i>{" "}
                  <span className="label-rating text-muted">
                    <i className="fa fa-comment"></i> 32 reviews{" "}
                  </span>{" "}
                  <i className="dot"></i>
                  <span className="label-rating text-muted">
                    {" "}
                    <i className="fa fa-shopping-basket"></i> 154 orders
                  </span>{" "}
                </div>
                <hr />{" "}
                <ul className=" list-check cols-two mb-4">
                  <li>Optical heart sensor </li>
                  <li>Some feature name </li>
                  <li>Super fast and amazing </li>
                  <li>Optical heart sensor </li>
                  <li>Easy fast and ver good </li>
                  <li>Metallic corpus </li>
                  <li>Modern style and design</li>
                </ul>{" "}
                <div className="mb-3">
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <select class="form-select">
                        <option selected="">Select size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>{" "}
                      </select>
                    </div>{" "}
                    <div class="col-md mb-3">
                      <div class="mt-2">
                        {" "}
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span class="form-check-label">Red</span>{" "}
                        </label>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span class="form-check-label">Green</span>{" "}
                        </label>
                        <label class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="choose_11"
                            value="option1"
                          />
                          <span class="form-check-label">Blue</span>{" "}
                        </label>
                      </div>{" "}
                    </div>
                  </div>
                </div>{" "}
                <div className="mb-4">
                  <var className="price h5">$98.00</var>
                  <span>/ 1 box, incl VAT </span>{" "}
                </div>
                <div className="row gx-2 mb-4">
                  {" "}
                  <div className="col-auto">
                    <a href="#" class="btn btn-warning">
                      {" "}
                      Buy now{" "}
                    </a>
                  </div>
                  <div className="col-auto">
                    <a
                      href="#"
                      className="btn btn-primary w-100 add_to_cart_btn"
                    >
                      <i className="me-2 fa fa-shopping-basket"></i> Add to cart{" "}
                    </a>
                  </div>{" "}
                  <div className="col">
                    <a href="#" className="btn btn-light btn-icon">
                      <i className="fas fa-heart"></i>{" "}
                    </a>
                  </div>{" "}
                </div>{" "}
                <label className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <span className="form-check-label"> Add to compare </span>
                </label>{" "}
              </article>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section className="padding-y bg-white shadow-sm">
        <div className="container">
          <DescandReviews />
        </div>
      </section>
      <section className="padding-y bg-white shadow-sm">
        <div className="container">
          <h3>Recommended Products</h3>
          <div className="recommended_items row my-1">
            {rec_product_items.map((items, index) => {
              return (
                <div className="col-md-3 col-sm-6 my-2">
                  <div className="product-grid">
                    <div className="product-image">
                      <a href="#">
                        <LazyLoadImage
                          loading="lazy"
                          className="pic-1"
                          effect='blur' // opacity | black-and-white
                          src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/13937/138251/2018-spring-men-s-shirt-men-s-long-sleeved-cotton-shirt-youth-business-solid-color__78215.1544102574.jpg?c=2"
                        />
                        <LazyLoadImage
                          loading="lazy"
                          className="pic-2"
                          effect='blur' // opacity | black-and-white
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCatalogue;
