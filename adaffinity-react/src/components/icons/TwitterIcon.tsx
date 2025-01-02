import React from "react";
import { Link } from "react-router-dom";
import LogoTwitter from "../../assets/images/social/Logo-twitter.svg";

const TwitterIcon: React.FC = () => {
  return (
    <Link to={"#"}>
        <img src={LogoTwitter} alt="twitter" />
    </Link>
  );  
} 

export default TwitterIcon;