import React from "react";
import aboutBanner from "../../../../assets/images/about-banner-pic.jpg";

const BannerSection: React.FC = () => {
    return (
        <section className="section-row banner-section d-flex align-items-center justify-content-center">
        <div className="container text-center">
            <div className="row no-gutters">
                <div className="col-lg-12 col-12 pt-5">
                    <div className="banner-panel text-center mx-auto">
                        <h1 className="mb-4">About us</h1>
                        <p className="mb-4">At Visionary Designs, we are committed to crafting innovative and sustainable
                            design solutions that transform spaces and inspire creativity. Our deep-rooted passion for
                            design excellence drives us to deliver exceptional results for our clients.</p>
                    </div>

                    <div className="banner-pic mt-5 text-center mx-auto">
                        <img src={aboutBanner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BannerSection;