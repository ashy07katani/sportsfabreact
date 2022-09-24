import React from "react";

export default function Carousel() {
    let styl = {height:"91vh"}
    let imgstyl = {filter:"brightness(50%)"}
    let txtstyl={zIndex:"1"}
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" style={styl}>
          <div className="carousel-caption d-none d-md-block" style={txtstyl}>
            <h3>Show your Love for Sports!</h3>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/Images/pic1.jpg"}
            className="d-block w-100"
            style={imgstyl}
            alt="..."
          />
        </div>
        <div className="carousel-item" style={styl}>
          <div className="carousel-caption d-none d-md-block" style={txtstyl}>
            <h3>Discuss with your friends.</h3>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/Images/pic2.jpg"}
            className="d-block w-100"
            alt="..."
            style={imgstyl}
          />
        </div>
        <div className="carousel-item" style={styl}>
          <div className="carousel-caption d-none d-md-block" style={txtstyl}>
            <h3>Grow Your fanbase!</h3>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/Images/pic3.jpg"}
            className="d-block w-100"
            alt="..."
            style={imgstyl}
          />
        </div>
      </div>
    </div>
  );
}
