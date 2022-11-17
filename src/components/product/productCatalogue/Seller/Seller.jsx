import React from "react";

const Seller = () => {
  return (
    <div>
      <div class="card-body">
        {" "}
        <h5 class="card-title">About seller</h5>{" "}
        <div class="itemside mb-4">
          {" "}
          <div class="aside">
            {" "}
            <img
              src="bootstrap5-ecommerce/images/brands/logo.jpg"
              width="60"
              height="60"
              class="img-sm img-thumbnail"
            />{" "}
          </div>{" "}
          <div class="info">
            {" "}
            <a href="https://visioncomputersolution.com" class="h6 title">
              Vision Computer Solution
            </a>{" "}
            <div class="rating-wrap">
              {" "}
              <ul class="rating-stars">
                {" "}
                <li class="stars-active" style={{ width: "70%" }}>
                  {" "}
                  <img
                    src="bootstrap5-ecommerce/images/misc/stars-active.svg"
                    alt=""
                  />{" "}
                </li>{" "}
                <li>
                  {" "}
                  <img
                    src="bootstrap5-ecommerce/images/misc/starts-disable.svg"
                    alt=""
                  />{" "}
                </li>{" "}
              </ul>{" "}
              <span class="label-rating text-muted">120 feedback</span>{" "}
            </div>{" "}
            <p>
              {" "}
              <img
                height="20"
                src="bootstrap5-ecommerce/images/flags/flag-nepal.png"
              />{" "}
              Pokhara-8, BagaleTole, 2 years
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <p>
          {" "}
          Established in 1980, lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor ut labore et dolore ipsum{" "}
        </p>{" "}
        <div class="d-flex gap-2 mb-2">
          {" "}
          <button class="btn w-100 btn-success" type="button">
            {" "}
            <i class="me-2 fa fa-phone"></i> Contact
          </button>{" "}
          <button class="btn w-100 btn-warning" type="button">
            {" "}
            <i class="me-2 fa fa-comment-dots"></i> Message
          </button>{" "}
        </div>{" "}
        <a
          href="https://bizbazar.com.np/vision-computer-solution/"
          class="btn w-100 btn-outline-primary"
        >
          Visit store
        </a>{" "}
      </div>
    </div>
  );
};

export default Seller;
