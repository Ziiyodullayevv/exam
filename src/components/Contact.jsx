import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div>
        <div className="A-parent">
          <div className="A-child">
            <h2>Contact Us</h2>
            <h4>Kindly reach us to get the fastest response and treatment</h4>
          </div>
          <div className="B-child">
            <img src="A1.svg" alt="" />
          </div>
        </div>
        <div className="A-parent1">
          <div className="A-input">
            <div className="A-name">
              <div className="dev">
                <h2>Name</h2>
                <input type="text" placeholder="David John" />
              </div>
              <div className="dev">
                <h2>Email</h2>
                <input type="text" placeholder="example@gmail.com" />
              </div>
            </div>
            <div className="A-name1">
              <div className="dev1">
                <h2>Subject</h2>
                <input type="text" placeholder="" />
              </div>
            </div>
            <div className="A-name2">
              <div className="dev2">
                <h2>Messenge</h2>
                <input type="text" />
              </div>
            </div>
            <div className="A-btn">
              <button>
                Submit <img src="A1.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="A-parent3">
        <div className="A-">
          <h1>Find Us Here</h1>
          <div className="A-center">
            <div className="A-cards">
              <div className="card-l">
                <img src="A2.svg" alt="icon" />
              </div>
              <div className="card-r">
                <h2>Phone</h2>
                <h2>123-456-7890</h2>
              </div>
            </div>
            <div className="A-cards">
              <div className="card-l">
                <img src="A2.svg" alt="icon" />
              </div>
              <div className="card-r">
                <h2>Phone</h2>
                <h2>123-456-7890</h2>
              </div>
            </div>
            <div className="A-cards">
              <div className="card-l">
                <img src="A2.svg" alt="icon" />
              </div>
              <div className="card-r">
                <h2>Phone</h2>
                <h2>123-456-7890</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="map-parent">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9630579153153!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c8a59e0f3f8d12!2sFederation%20Square!5e0!3m2!1sen!2s!4v1646910244969!5m2!1sen!2s"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
