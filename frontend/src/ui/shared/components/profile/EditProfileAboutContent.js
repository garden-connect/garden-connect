import React from "react";
import {useSelector} from "react-redux";

export const EditProfileAboutContent = (props) => {
    const profile = useSelector(state => (state.profiles ? state.profiles[0] : null))
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
                    <label htmlFor="profileAbout">Tell us about yourself</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="profileAbout"
                            type="text"
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
                    <button className="btn btn-primary mb-2" type="submit">That's Me!</button>
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