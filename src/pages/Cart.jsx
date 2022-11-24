import React from "react";
// import useSelector to use cart count 
import { useSelector } from "react-redux";
const Cart = () => {
  //  find value of cart count
  const cartCount= useSelector((state)=>state.cart.count)
  return (
    <div className="shopping_cart container mt-3">
      <div className="row">
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Shopping cart</h5>
              {
                [...Array(cartCount)].map((number,index)=>{
                  return(
                    <article className="row gy-3 mb-4">
                    <div className="col-lg-6">
                      <div className="itemside me-lg-5">
                        <div className="aside">
                          <img
                            src="bootstrap5-ecommerce/images/items/1.jpg"
                            className="img-sm border rounded"
                          />
                        </div>
                        <div className="info">
                          <a href="#" className="title mb-1">
                            GoPro HERO6 4K Action Camera - Black color
                          </a>
                          <p className="text-muted small">
                            Color: Black, Zoom: 80x
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div class="input-group input-spinner">
                        <button class="btn btn-light" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#999"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 13H5v-2h14v2z"></path>
                          </svg>
                        </button>
                        <input type="text" class="form-control" value="1" />
                        <button class="btn btn-light" type="button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#999"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                      <div className="price-wrap lh-sm">
                        <var className="price h6">$1156.00</var> <br />
                        <small className="text-muted"> $460.00 / per item </small>
                      </div>
                    </div>
                    <div className="col-lg col-sm-4">
                      <div className="float-lg-end">
                        <a href="#" className="btn btn-light">
                          <i className="fa fa-heart"></i>
                        </a>
                        <a href="#" className="btn btn-light text-danger">
                          Remove
                        </a>
                      </div>
                    </div>
                  </article>
                  )
                })
                
              }

            </div>
            <div className="card-body border-top">
              <p className="mb-0">
                <i className="me-2 text-success fa fa-truck"></i> Free Delivery
                within 1-2 weeks
              </p>
            </div>
          </div>
        </div>
        <aside className="col-lg-3">
          <div className="card mb-3">
            <div className="card-body">
              <form>
                <label className="form-label">Have coupon?</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon code"
                  />
                  <button className="btn btn-light">Apply</button>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <dl className="dlist-align">
                <dt>Total price:</dt> <dd className="text-end"> $1403.97</dd>
              </dl>
              <dl className="dlist-align">
                <dt>Discount:</dt>
                <dd className="text-end text-success"> - $60.00 </dd>
              </dl>
              <dl className="dlist-align">
                <dt>TAX:</dt>
                <dd className="text-end text-danger"> + $14.00 </dd>
              </dl>
              <hr />
              <dl className="dlist-align">
                <dt>Total:</dt>
                <dd className="text-end text-dark h5"> $1357.97 </dd>
              </dl>
              <div className="d-grid gap-2 my-3">
                <a href="#" className="btn btn-primary w-100">
                  Make Purchase
                </a>
                <a href="#" className="btn btn-light w-100">
                  Back to shop
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
