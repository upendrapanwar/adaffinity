import React from "react";
import { Link } from "react-router-dom";
import LogoFacebook from "../../assets/images/social/Logo-facebook.svg";

const FacebookIcon: React.FC = () => {
  return (
    <Link to={"#"}>
        <img src={LogoFacebook} alt="twitter" />
    </Link>
  );  
} 

export default FacebookIcon;