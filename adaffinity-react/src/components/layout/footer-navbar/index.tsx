import React from "react";
import { Link } from "react-router-dom";

const FooterNavbar: React.FC = () => {
    return (
        <div className="row mt-4 mb-4">
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="footer-title pt-30">
                    <h5>Videos</h5>
                </div>
                <div className="footer-info ft_big_menu">
                    <ul>
                        <li><Link to={"#"}>Animals</Link></li>
                        <li><Link to={"#"}>Tech video</Link></li>
                        <li><Link to={"#"}>Education</Link></li>
                        <li><Link to={"#"}>Video game</Link></li>
                        <li><Link to={"#"}>Finance</Link></li>
                        <li><Link to={"#"}>Comedy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-title pt-30">
                    <h5>Company</h5>
                </div>
                <div className="footer-info">
                    <ul>
                        <li><Link to={"/about-us"}>About us</Link></li>
                        <li><Link to={"/contact-us"}>Contact us</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="footer-title pt-30">
                    <h5>Legals</h5>
                </div>
                <div className="footer-info">
                    <ul>
                        <li><Link to={"/privacy-policy"}>Privacy Policy</Link></li>
                        <li><Link to={"/terms-and-conditions"}>Term and Conditions</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    );
}
export default FooterNavbar;