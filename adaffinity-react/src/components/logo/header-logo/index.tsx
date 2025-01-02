import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../../assets/images/site-logo.png";

const Logo: React.FC = async () => {

  return (

    <Link className="navbar-brand" to={"/"}>
      <img src={siteLogo} alt="Logo" />
    </Link>
  );
}

export default Logo; 