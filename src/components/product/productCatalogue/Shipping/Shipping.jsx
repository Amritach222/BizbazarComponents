import React from "react";

const Shipping = () => {
  return (
    <div className="shipping_container">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="delivery d-flex flex-column align-items-center">
            <h5 className="title">Delivery Time & Charges</h5>
            <ul>
              <li> Kathmandu Valley - 2 Working Days</li>
              <li>Delivery Charge for Kathmandu Valley-Rs. 60</li>
              <li>Outside Kathmandu Valley-3-5 Working Days</li>
              <li>Delivery Charge for Outside Valley- Rs. 100</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="payment d-flex flex-column align-items-center">
            <h5 className="title">Payment options</h5>
            <ul>
              <li>Cash on Delivery</li>
              <li>IME Pay Online Payment</li>
              <li>Khalti Wallet Online Payment</li>
              <li>Connect IPS Online Payment</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="advantages d-flex flex-column align-items-center">
            <h5 className="title">Our advantages</h5>
            <ul>
              <li> SMS notification</li>
              <li>Return and exchange</li>
              <li>Different payment methods</li>
              <li>Best price</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
