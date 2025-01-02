import React from "react";
import { Link } from "react-router-dom";
import footLogo from "../../../assets/images/footer-logo.png";

const FooterLogo: React.FC = async () => {

    return (
        <div className="col-lg-12 col-md-12 col-sm-12 py-3 text-center">
            <Link to={"/"}>
                <img className="inline" src={footLogo} alt="Logo" />
            </Link>
        </div>

    );
}

export default FooterLogo; 