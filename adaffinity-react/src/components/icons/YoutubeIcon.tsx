import React from "react";
import { Link } from "react-router-dom";
import LogoYoutube from "../../assets/images/social/Logo-youtube.svg";

const YoutubeIcon: React.FC = () => {
  return (
    <Link to={"#"}>
        <img src={LogoYoutube} alt="twitter" />
    </Link>
  );  
} 

export default YoutubeIcon;