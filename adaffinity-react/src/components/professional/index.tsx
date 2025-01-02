import React from "react";
import { Link } from "react-router-dom";
import ctaPic from "../../assets/images/about-pic.jpg";

const Professional: React.FC = () => {
    return (
        <section className="section-row bg-lightblack cta_section">
        <div className="container">
          <div className="cta_panels">
            <div className="row no-gutters">
              <div className="col-lg-6 col-12 no-gutters">
                <div className="callto_action_bar py-5 px-5">
                  <h2 className="mb-4">Join 7 millions of professionals!</h2>
                  <p className="mb-5">Our free plan shows you what this app can do. No credit card required.</p>
                  <Link className="btn btn-md btn-white px-4" to={""}>Join for free</Link>
                </div>
              </div>
              <div className="col-lg-6 col-12 no-gutters">
                <div className="aboutPic">
                  <img className="inline" src={ctaPic} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
}

export default Professional;


