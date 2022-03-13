import React from "react";
import {Button, Dropdown, DropdownButton, Form, FormLabel, Row} from "react-bootstrap";
import {FormDebugger} from "./FormDebugger";


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
                <Form onSubmit={handleSubmit}>
                    <Row>
                        {/*Title Input*/}
                        <FormLabel>Create a post</FormLabel>
                        <input id={"postTitle"} placeholder={"Custom Title"}
                        className="form-control"
                        name="postTitle"
                        value={values.postTitle}
                       onChange={handleChange}
                       onBlur={handleBlur}
                        />
                        {
                            errors.postTitle && touched.postTitle && (
                                <div className="alert alert-danger">
                                    {errors.postTitle}
                                </div>
                            )
                        }

                        {/*Image Input*/}
                        <FormLabel>Image</FormLabel>
                        <input className="form-control" type={"file"} id="postPicture"
                               placeholder="Add Image" value={values.postPicture} onChange={handleChange} onBlur={handleBlur}/>
                        {
                            errors.postPicture && touched.postPicture && (
                                <div className="alert alert-danger">
                                    {errors.postPicture}
                                </div>
                            )
                        }
                        {/*Select Category*/}
                        <FormLabel>Harvest or Hands</FormLabel>


                        <DropdownButton id="dropdown-basic-button"
                                        title="Category"
                                        className="form-control"
                                        name="postCategory"
                                        value={values.postCategory}
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                            <Dropdown.Item href="#/action-1">Harvest</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Hands</Dropdown.Item>


                        </DropdownButton>
                        {
                            errors.postCategory&& touched.postCategory && (
                                <div className="alert alert-danger">
                                    {errors.postCategory}
                                </div>
                            )
                        }
                        {/*Post Description*/}
                        <FormLabel>Item Description</FormLabel>
                        <input
                            className="form-control"
                            name="postContent"
                            type="text"
                            value={values.postContent}
                            placeholder="What do you want to say?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {
                            errors.postContent && touched.postContent && (
                                <div className="alert alert-danger">
                                    {errors.postContent}
                                </div>
                            )
                        }
                    </Row>
                    <div className={"mt-3"}>
                        <Button className="btn btn-primary mb-2" type="submit">Post</Button>
                        <button
                            className="btn btn-secondary mb-2"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >Cancel
                        </button>
                    </div>

                    <FormDebugger {...props} />

                </Form>
                {
                       status && (<div className={status.type}>{status.message}</div>)
                    }
        </>
        )
        };
{/*        <div className={"form-group"}>*/}
{/*            <label htmlFor={"profileHandle"}>Create a Post</label>*/}
{/*            <div className={"input-group"}>*/}
{/*                <div className={"input-group-prepend"}>*/}
{/*                    <div className={"input-group-text"}></div>*/}
{/*                </div>*/}
{/*                <input*/}
{/*                    className="form-control"*/}
{/*                    name="postContent"*/}
{/*                    type="text"*/}
{/*                    value={values.postContent}*/}
{/*                    placeholder="What do you want to say?"*/}
{/*                    onChange={handleChange}*/}
{/*                    onBlur={handleBlur}*/}
{/*                />*/}
{/*            </div>*/}
{/*            {*/}
{/*                errors.postContent && touched.postContent && (*/}
{/*                    <div className="alert alert-danger">*/}
{/*                        {errors.postContent}*/}
{/*                    </div>*/}
{/*                )*/}
{/*            }*/}
{/*        </div>*/}

{/*        <div className="form-group">*/}
{/*            <button className="btn btn-primary mb-2" type="submit">Submit</button>*/}
{/*            <button*/}
{/*                className="btn btn-secondary mb-2"*/}
{/*                onClick={handleReset}*/}
{/*                disabled={!dirty || isSubmitting}*/}
{/*            >Reset*/}
{/*            </button>*/}
{/*        </div>*/}

{/*    </form>*/}
{/*    {*/}
{/*        status && (<div className={status.type}>{status.message}</div>)*/}
{/*    }*/}
{/*</>*/}



