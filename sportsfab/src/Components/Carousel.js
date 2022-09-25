import React from "react";

export default function Carousel() {
  let styl = { height: "91vh" };
  let imgstyl = { filter: "brightness(50%)", height:"100vh", width:"100vw"};
  let txtstyl = { zIndex: "1" , position:"absolute"};
  let h3styl={fontSize:"6vw"};
  let h5styl={fontSize:"1.3vw"};
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{position:"relative",backgroundColor:"red"}}>
        <div className="carousel-item active caro-item" style={styl}>
          <div className="carousel-caption left caption-pos"  style={txtstyl}>
            <h5 style={h5styl}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              exercitationem porro sunt architecto amet pariatur nisi, minima
              laudantium quasi ipsam aut eaque nulla debitis reiciendis
              molestias! Voluptate at laudantium numquam nihil maxime nam cum ex
              officia suscipit vero, cumque, ducimus unde enim placeat
              temporibus quidem. Temporibus natus atque dolorum sapiente.
            </h5>
          </div>
          <div className="carousel-caption d-none d-md-block" style={txtstyl}>
            <h3 style={h3styl}>Show your Love for Sports!</h3>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/Images/pic1.jpg"}
            className="d-block w-100"
            style={imgstyl}
            alt="..."
          />
        </div>
        <div className="carousel-item caro-item" style={styl}>
          <div className="carousel-caption center caption-pos" style={txtstyl}>
            <h5 style={h5styl}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              exercitationem porro sunt architecto amet pariatur nisi, minima
              laudantium quasi ipsam aut eaque nulla debitis reiciendis
              molestias! Voluptate at laudantium numquam nihil maxime nam cum ex
              officia suscipit vero, cumque, ducimus unde enim placeat
              temporibus quidem. Temporibus natus atque dolorum sapiente.
            </h5>
          </div>
          <div className="carousel-caption d-none d-md-block" style={txtstyl}>
            <h3 style={h3styl}>Discuss with your friends.</h3>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/Images/pic2.jpg"}
            className="d-block w-100"
            alt="..."
            style={imgstyl}
          />
        </div>
        <div className="carousel-item caro-item" style={styl}>
          <div className="carousel-caption right caption-pos" style={txtstyl}>
            <h5 style={h5styl}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              exercitationem porro sunt architecto amet pariatur nisi, minima
              laudantium quasi ipsam aut eaque nulla debitis reiciendis
              molestias! Voluptate at laudantium numquam nihil maxime nam cum ex
              officia suscipit vero, cumque, ducimus unde enim placeat
              temporibus quidem. Temporibus natus atque dolorum sapiente.
            </h5>
          </div>
          <div className="carousel-caption d-none d-md-block" style={txtstyl}>
            <h3 style={h3styl}>Grow Your fanbase!</h3>
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
