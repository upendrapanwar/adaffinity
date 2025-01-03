import React from "react";
import { Link } from "react-router-dom";
import LogoFacebook from "../../assets/images/social/facebook.svg";

const FacebookIcon32: React.FC = () => {
  return (
    <Link to={"#"} className="social-icon">
        <img src={LogoFacebook} alt="Facebook" width="32" height="32" />
    </Link>
  );  
} 

export default FacebookIcon32;