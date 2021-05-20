import React from "react";
import "./ContactUs.css";

import ImgBg from "../../images/contactus.jpg";

function ContactUs() {
  return (
    <div>
      <div className="imgcontainer">
        <img src={ImgBg} className="img-fluid blackfade"></img>{" "}
        <div className="centered text-light">
          <h1 className="font">Kontakt os</h1>
          <p>Kan du lide SaveAMeal, eller har du noget feedback?</p>
        </div>
      </div>
      <div className="container mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-5">
              {" "}
              <form>
                <div className="form-group">
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="NameHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="message"
                    className="form-control"
                    id="exampleInputmessage"
                    placeholder="Besked"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default ContactUs;
