import React from "react";
import {useSelector} from "react-redux";
import {StarRatingResponsive} from "../StarRatingResponsive";

export const ReviewFormContent = (props) => {
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
                <StarRatingResponsive values={values}/>

                <div className="form-group">
                    <label htmlFor="ratingReview">Write a Review:</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="ratingReview"
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
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
};