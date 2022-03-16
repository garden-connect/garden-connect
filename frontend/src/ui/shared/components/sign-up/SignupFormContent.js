import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormDebugger} from "../FormDebugger";
import React from "react";
import {Button} from "react-bootstrap";
import {SigninModal} from "../sign-in/SigninModal";

export const SignupFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <form className="signupformid" onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="profileEmail">Email Address</label>
                    <div className="input-group">
                        <input
                            className="form-control my-3"
                            name="profileEmail"
                            type="email"
                            value={values.profileEmail}
                            placeholder="Enter a valid email address"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileEmail && touched.profileEmail && (
                            <div className="alert alert-danger">
                                {errors.profileEmail}
                            </div>
                        )

                    }
                </div>
                {/*controlId must match what is defined by the initialValues object*/}
                <div className="form-group">
                    <label htmlFor="profilePassword">Password</label>
                    <div className="input-group">
                        <input
                            name="profilePassword"
                            className="form-control my-3"
                            type="password"
                            placeholder="Password"
                            value={values.profilePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.profilePassword && touched.profilePassword && (
                        <div className="alert alert-danger">{errors.profilePassword}</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="profilePasswordConfirm">Confirm Your Password</label>
                    <div className="input-group">
                        <input

                            className="form-control my-3"
                            type="password"
                            name="profilePasswordConfirm"
                            placeholder="Password Confirm"
                            value={values.profilePasswordConfirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
                        <div className="alert alert-danger">{errors.profilePasswordConfirm}</div>
                    )}
                </div>


                <div className="form-group">
                    <label htmlFor="profileName">Username</label>
                    <div className="input-group">
                        <input
                            className="form-control my-3"
                            name="profileName"
                            type="text"
                            value={values.profileName}
                            placeholder="Choose a username"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileName && touched.profileName && (
                            <div className="alert alert-danger">
                                {errors.profileName}
                            </div>
                        )
                    }
                </div>

                <div className="form-group mb-5">
                    <Button className="" type="submit">Submit</Button>
                    <Button
                        className="btn btn-danger m-3"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </div>
                {
                    status && (<div className={status.type}>{status.message}</div>)
                }

                {/*<FormDebugger {...props} />*/}
            </form>

        </>


    )
};