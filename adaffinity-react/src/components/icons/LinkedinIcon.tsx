import React from "react";
import { Link } from "react-router-dom";
import LogoLinkedin from "../../assets/images/social/Logo-linkedin.svg";

const LinkedinIcon: React.FC = () => {
  return (
    <Link to={"#"}>
        <img src={LogoLinkedin} alt="twitter" />
    </Link>
  );  
} 

export default LinkedinIcon;