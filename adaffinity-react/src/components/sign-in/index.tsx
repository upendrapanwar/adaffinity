import React from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "..//footer";
import GoogleIcon32 from "../icons/GoogleIcon";
import FacebookIcon32 from "../icons/FacebookIcon32";
import loginImd from "../../assets/images/login-img.jpg";

const SignIn: React.FC = () => {
    return (
        <>
            <Header />
            <section className="section-row signup-section">
                <div className="container text-center">
                    <div className="row no-gutters pt-3">

                        <div
                            className="signup-container d-flex justify-content-center align-items-stretch align-items-center m-auto pr-0 px-0">
                            <div className="col-lg-6 col-12 ">
                                <div className="signup-card p-5">
                                    <h2 className="text-center mb-4">Sign In</h2>
                                    <form>

                                        <div className="field_item mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                                required />
                                        </div>

                                        <div className="field_item mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password"
                                                placeholder="Enter your password" required />
                                        </div>

                                        <div className="field_item mb-3">
                                            <button type="submit" className="btn btn-red w-100">Sign In</button>
                                        </div>
                                    </form>
                                    <p className="text-center mt-3 already-login">
                                        Don't have account? <Link to={"/sign-up"}>SignUp</Link>
                                    </p>


                                    <div className="text-center social-login mt-4">
                                        <p>Or sign up with</p>
                                        <div className="d-flex justify-content-center gap-3">
                                            <Link to={"#"} className="social-icon">
                                                <GoogleIcon32 />
                                            </Link>
                                            <Link to={"#"} className="social-icon">
                                                <FacebookIcon32 />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-12 px-0 relative">
                                <div className="signupPic">
                                    <img src={loginImd} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SignIn;