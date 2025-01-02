import React from "react";
import aboutUsImg from "../../../assets/images/about-pic.jpg";

const AboutUs: React.FC = () => {
    return (
        <section className="section-row">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-6 col-12">
                        <div className="about-info">
                            <h2>About us</h2>
                            <p className="mb-5">VideoHub is your go-to platform for discovering, streaming, and sharing video
                                content across
                                various genres and interests.</p>

                            <div className="about_item">
                                <h3>Innovation</h3>
                                <p>At VideoHub, we revolutionize the way you experience video content by leveraging
                                    state-of-the-art technology and innovative features.</p>
                            </div>
                            <div className="about_item">
                                <h3>Customer-Centric</h3>
                                <p>We are dedicated to delivering exceptional service and experience, ensuring our clients
                                    enjoy seamless and personalized interactions.</p>
                            </div>
                            <div className="about_item">
                                <h3>Expertise</h3>
                                <p>Our team comprises industry experts with decades of experience, bringing profound
                                    knowledge and creativity to every project.</p>
                            </div>
                            <div className="about_item">
                                <h3>Integrity</h3>
                                <p>Transparency and honesty form the core of our values, guiding every action and decision
                                    at VideoHub.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="img_div">
                            <img src={aboutUsImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;