import React from "react";
import {useSelector} from "react-redux";

export const EditProfileContent = (props) => {
    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === auth.profileId) : null))[0]
    // console.log(profile)
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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="profileName">What would you like to be called?</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="profileName"
                            type="text"
                            value={values.profileName}
                            placeholder={profile.profileName}
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

                <div className="form-group">
                    <label htmlFor="profileAbout">Tell us about yourself</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="profileAbout"
                            type="textarea"
                            value={values.profileAbout}
                            placeholder={profile.profileAbout}
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileAbout && touched.profileAbout && (
                            <div className="alert alert-danger">
                                {errors.profileAbout}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" onClick={handleSubmit}>Update Profile</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
};