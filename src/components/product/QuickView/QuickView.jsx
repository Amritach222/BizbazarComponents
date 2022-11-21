import React from "react";
import ProductView from "../ProductView/ProductView";
import './quickview.scss'
const QuickView = () => {
  return (
    <div className="quick_view">
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Quick Product Viewer
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <ProductView/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
