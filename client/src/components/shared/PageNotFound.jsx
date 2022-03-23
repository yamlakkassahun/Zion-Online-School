import React from "react";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div>
      <div className="page-content bg-white">
        <div
          className="page-banner ovbl-dark"
          style={{
            "backgroundImage": `url(assets/images/banner/banner3.jpg)`,
          }}
        >
          <div className="container">
            <div className="page-banner-entry"></div>
          </div>
        </div>
      </div>
      <div className="account-form ">
        <div className="account-form-inner">
          <div className="account-container">
            <div className="error-page">
              <h3>Ooopps :(</h3>
              <h2 className="error-title">404</h2>
              <h5>The Page you were looking for, couldn't be found.</h5>
              <p>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
              <div className="">
                <Link to={"/"} className="btn m-r5">
                  Preview
                </Link>
                <Link to={'/home'} className="btn outline black">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
