import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo/header-logo";

const Navigation: React.FC = () => {

    return (
      <nav className="navbar navbar-expand-lg justify-content-between">
                            <Logo />
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="active" to={"/"}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/about-us"}>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/faqs"}>Faqs</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to={"/videos"}>Videos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact-us"}>Contact Us</Link>
                                    </li>
                                    <li className="nav-item signin-btn">
                                        <Link className="btn btn-md px-3 btn-red" to={"/sign-in"}>Sign In</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
    )
}

export default Navigation;