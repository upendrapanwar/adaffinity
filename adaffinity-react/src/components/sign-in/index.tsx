import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "..//footer";
import GoogleIcon32 from "../icons/GoogleIcon";
import FacebookIcon32 from "../icons/FacebookIcon32";
import loginImd from "../../assets/images/login-img.jpg";
import { toast } from "react-toastify";
import { Formik, FormikHelpers } from "formik";
import { Login } from "../../types/login.interface";
import userLoginSchema from "../../validation-schemas/userLoginSchema";
import axios from "axios";

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const initialValues: Login = {
        email: '',
        password: ''
    };
    useEffect(() => {
    
    
    }, []);
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle after form submission
     * 
     */
    const handleSubmit = (values: Login, { resetForm }: FormikHelpers<Login>) : void => {
        //navigate("/login");
        axios.post('auth/signin', values).then((response) => {
            toast.dismiss();
            console.log(response.data);
            console.log(response.data.message)
            if (response.data.status) {
                toast.success(response.data.message, { autoClose: 3000 });
                resetForm();
                navigate("/creators/creator-dashboard");
            }
            if (response.data.status) {
                toast.success(response.data.message, {
                  position: "top-center",
                  autoClose: 3000,
               });
               let authInfo = {
                   expTime: response.data.data.expTime,
                   id: response.data.data["_id"],
                   token: response.data.data.token,
                   name: response.data.data.first_name + " " + response.data.data.last_name,
                   role: response.data.data.role,
                   email: response.data.data.email,
               };
               
               localStorage.setItem("authInfo", JSON.stringify(authInfo));
               resetForm();
               switch(response.data.data.role) {
                   case 'creator':
                       navigate("/creators/creator-dashboard");
                   break;
                   case 'advertisor':    
                        navigate("/advertisor/advertisor-dashboard");
                   break;
                   
                   default:
                       navigate("/");
                   break;    
               }
              
           } else {
               resetForm();
               toast.error(response.data.message, { autoClose: 3000 });
               // recaptchaRef.current.reset(); // Reset the ReCAPTCHA
           }
        }).catch(error => {
            
            toast.dismiss();
            if (error.response) {
                resetForm();
                toast.error(error.response.data.message, { autoClose: 3000 });
               // recaptchaRef.current.reset(); // Reset the ReCAPTCHA
            }
        }).finally(() => {
            setTimeout(() => {
                // setLoading(false);
            }, 300);
        });
    }
    /***********************************************************************/
    /***********************************************************************/
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
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                        validationSchema={userLoginSchema}
                                    >{({ values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isValid,
                                        isSubmitting
                                    }) => (
                                        <form onSubmit={handleSubmit}>

<div className="field_item mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"
                                                    onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                                {touched.email && errors.email ? (
                                                    <small className="text-danger">{errors.email}</small>
                                                ) : null}
                                            </div>

                                            <div className="field_item mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input type="password" className="form-control" id="password" name="password"
                                                    placeholder="Enter your password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                                {touched.password && errors.password ? (
                                                    <small className="text-danger">{errors.password}</small>
                                                ) : null}
                                            </div>

                                            <div className="field_item mb-3">
                                                <button type="submit" className="btn btn-red w-100">Sign In</button>
                                            </div>
                                        </form>
                                        )}
                                    </Formik>
                                    <p className="text-center mt-3 already-login">
                                        Don't have account? <Link to={"/sign-up"}>SignUp</Link>
                                    </p>


                                    <div className="text-center social-login mt-4">
                                        <p>Or sign up with</p>
                                        <div className="d-flex justify-content-center gap-3">
                                            <GoogleIcon32 />
                                            <FacebookIcon32 />
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