import React from "react";

export const PostFormContent = (props) => {
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

                <div className={"form-group"}>
                    <label htmlFor={"profileHandle"}>Create a Post</label>
                    <div className={"input-group"}>
                        <div className={"input-group-prepend"}>
                            <div className={"input-group-text"}></div>
                        </div>
                        <input
                            className="form-control"
                            name="postContent"
                            type="text"
                            value={values.postContent}
                            placeholder="What do you want to say?"
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
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-secondary mb-2"
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