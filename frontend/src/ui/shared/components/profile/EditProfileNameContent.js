import React from "react";
import {useSelector} from "react-redux";

export const EditProfileNameContent = (props) => {
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
                    <button className="btn btn-primary mb-2" type="submit">Change Name</button>
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