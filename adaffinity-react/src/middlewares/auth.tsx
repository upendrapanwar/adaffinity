import React, { useEffect, FC, useState } from "react";
import { Navigate } from "react-router-dom";

type MiddlewareProps = {
  children: React.ReactNode; 
};

const Middleware: FC<MiddlewareProps> = (props) => {
  const [needLogin, setNeedLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setNeedLogin(false);
    } else {
      setNeedLogin(true);
    }
  }, []);

  return (
    <>
      {needLogin && <Navigate to="/login" />}
      {!needLogin && <>{props.children}</>}
    </>
  );
};

export default Middleware;
