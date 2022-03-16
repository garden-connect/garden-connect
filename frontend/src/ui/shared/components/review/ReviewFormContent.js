import React from "react";
import {useSelector} from "react-redux";
import {StarRatingResponsive} from "../StarRatingResponsive";
import {FormDebugger} from "../FormDebugger";

export const ReviewFormContent = (props) => {
    const auth = useSelector(state => state.auth ? state.auth : null);
    const profile = useSelector(state => (state.profiles ? state.profiles.filter(profile => profile.profileId === auth.profileId) : null))[0]
    // console.log(profile)
    const {
        setFieldValue,
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
                <StarRatingResponsive values={values}
                setFieldValue={setFieldValue}/>

                <div className="form-group">
                    <label htmlFor="ratingContent">Write a Review:</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="ratingContent"
                            type="text"
                            value={values.ratingContent}
                            placeholder="Review Content"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.ratingContent && touched.ratingContent && (
                            <div className="alert alert-danger">
                                {errors.ratingContent}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" type={"submit"}>Submit Review</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>
            </form>
            {/*<FormDebugger {...props} />*/}
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
};