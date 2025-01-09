import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import GoogleIcon32 from "../icons/GoogleIcon";
import FacebookIcon32 from "../icons/FacebookIcon32";
import loginImd from "../../assets/images/login-img.jpg";
import userRegistrationSchema from "../../validation-schemas/userRegistrationSchema";
import { toast } from "react-toastify";
import { Formik } from "formik";
import axios from "axios";
import { Register } from "../../types/register.interface";

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const initialValues: Register = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: ''
    };

    useEffect(() => {


    }, []);
    /***********************************************************************/
    /***********************************************************************/
    /**
     * Handle after form submission
     * 
     */
    const handleSubmit = (values: Register, { resetForm }: { resetForm: (nextState?: Partial<Register>) => void }) => {
        //navigate("/login");
        axios.post('auth/signup', values).then(response => {
            toast.dismiss();
            console.log(response.data);
            console.log(response.data.message)
            if (response.data.status) {
                toast.success(response.data.message, { autoClose: 3000 });
                resetForm();
                navigate("/sign-in");
            }
        }).catch(error => {
            toast.dismiss();
            if (error.response) {
                const message = "User already Exists!";
                toast.error(
                    <div dangerouslySetInnerHTML={{ __html: message }} />,
                    { position: "top-center", autoClose: 3000 }
                );
                // recaptchaRef.current.reset(); 
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
                                    <h2 className="text-center mb-4">Create an account</h2>
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                        validationSchema={userRegistrationSchema}
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
                                                <label htmlFor="first_name" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="first_name"
                                                    name="first_name" placeholder="Enter your first name" onChange={handleChange} onBlur={handleBlur} value={values.first_name} />
                                                {touched.first_name && errors.first_name ? (
                                                    <small className="text-danger">{errors.first_name}</small>
                                                ) : null}
                                            </div>

                                            <div className="field_item mb-3">
                                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="last_name"
                                                    name="last_name" placeholder="Enter your last name" onChange={handleChange} onBlur={handleBlur} value={values.last_name} />
                                                {touched.last_name && errors.last_name ? (
                                                    <small className="text-danger">{errors.last_name}</small>
                                                ) : null}
                                            </div>

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
                                                <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                                <input type="password" className="form-control" id="confirm_password" name="confirm_password"
                                                    placeholder="Enter your password again" onChange={handleChange} onBlur={handleBlur} value={values.confirm_password} />
                                                {touched.confirm_password && errors.confirm_password ? (
                                                    <small className="text-danger">{errors.confirm_password}</small>
                                                ) : null}
                                            </div>
                                            <div className="field_item mb-3">
                                                <label htmlFor="role" className="form-label">Role</label>
                                                <select className="form-control" name="role" id="role" onChange={handleChange} onBlur={handleBlur} value={values.role} >
                                                    <option value="">Select Role</option>
                                                    <option value="advertisor">Advertisor</option>
                                                    <option value="creator">Creator</option>
                                                </select>
                                                {touched.role && errors.role ? (
                                                    <small className="text-danger">{errors.role}</small>
                                                ) : null}
                                            </div>

                                            <div className="field_item mb-3">
                                                <button type="submit" className="btn btn-red w-100">Sign Up</button>
                                            </div>
                                        </form>
                                    )}
                                    </Formik>
                                    <p className="text-center mt-3 already-login">
                                        Already have an account? <Link to={'/sign-in'}>Login</Link>
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

export default SignUp;