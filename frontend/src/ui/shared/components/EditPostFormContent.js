import React from "react";
import {useSelector} from "react-redux";

export const EditPostFormContent = (props) => {
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
                    <label htmlFor="postTitle">Post Title</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="postTitle"
                            type="text"
                            value={values.postTitle}
                            placeholder="Title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.postTitle && touched.postTitle && (
                            <div className="alert alert-danger">
                                {errors.postTitle}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="postContent">Post</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="postContent"
                            type="textarea"
                            value={values.postContent}
                            placeholder="Post"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.postContent && touched.postContent && (
                            <div className="alert alert-danger">
                                {errors.postContent}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" onClick={handleSubmit}>Update Post</button>
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