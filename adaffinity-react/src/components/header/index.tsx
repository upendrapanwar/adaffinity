import React from "react";
import Navigation from "../layout/navbar";

const Header:React.FC = () => {
    return (
        <header className="header-part">

            <div className="navigation py-2">
                <div className="container pr-0 px-0">
                    <div className="row no-gutters">
                        <div className="col-lg-12 col-12">
                            <Navigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;