import React from "react";
import "./Home.css";
import { Navigation } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Navigation /> */}

      <div id="home">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_530695792_3643x.jpg?v=1591228646"
                className="d-block w-100"
                alt="scuba diver"
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://greenfins.net/wp-content/uploads/2020/10/Impact-Of-Scuba-Diving-On-A-Coral-Reef-Dos-Donts-Green-Living-Zone-2.jpg"
                className="d-block w-100"
                alt="scuba diving"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0002/3111/2721/products/LostWindsSpearfishingGuide.jpg?v=1585897310"
                className="d-block w-100"
                alt="spear fishing"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
