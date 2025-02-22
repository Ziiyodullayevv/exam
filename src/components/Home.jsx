import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="obshiy">
      <section className="gallery">
        <div className="container">
          <div className="parent">
            <div className="left">
              <img src={"/j1qiz.svg"} alt="" />
            </div>
            <div className="right">
              <h2>
                Welcome to <br />
                ProHealth Gallery
              </h2>
              <p>The special moment of our hospital</p>
            </div>
          </div>
        </div>
      </section>
      <section className="down">
        <div className="container">
          <div className="images">
            <div className="img1">
              <img src={"/j1img1.svg"} alt="" />
              <img src={"/j1img2.svg"} alt="" />
            </div>
            <div className="img2">
              <img src={"/j1img3.svg"} alt="" />
              <img src={"/j1img4.svg"} alt="" />
              <img src={"/j1img5.svg"} alt="" />
            </div>
            <div className="img3">
              <img src={"/j1img6.svg"} alt="" />
              <img src={"/j1img7.svg"} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="downn">
        <div className="container">
          <div className="downn-parent">
            <div className="dleft">
              <h2>
                Don’t Let Your Health <br /> Take a Backseat!
              </h2>
              <p>
                Schedule an appointment with one of our experienced <br />{" "}
                medical professionals today!
              </p>
            </div>
            <div className="dright">
              <img src={"/j1qiz2.svg"} alt="" />
            </div>
          </div>
        </div>
      </section>
      );
    </div>
  );
};

export default Home;
