import React from "react";
import FooterLogo from "../logo/footer-logo";
import FooterNavbar from "../layout/footer-navbar";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
        <div className="container ">

            <div className="footer m-auto">
                <div className="row">
                    <FooterLogo />
                </div>
                <FooterNavbar />
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <div className="social-icons">
                            <span className="ft_social-item">
                                <TwitterIcon />
                            </span>
                            <span className="ft_social-item">
                                <FacebookIcon />
                            </span>
                            <span className="ft_social-item">
                                <LinkedinIcon />
                            </span>
                            <span className="ft_social-item">
                                <YoutubeIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright pt-5 pb-3 text-center">
            <p>&copy; Website Private Limited. All Rights Reserved</p>
        </div>

    </footer>
    );
}
export default Footer;