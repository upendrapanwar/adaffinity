import React from "react";
import { Link } from "react-router-dom";
import LogoGoogle from "../../assets/images/social/Google.svg";

const GoogleIcon32: React.FC = () => {
  return (
    <Link to={"#"}>
        <img src={LogoGoogle} alt="Google" width="32" height="32" />
    </Link>
  );  
} 

export default GoogleIcon32;