import React from "react";
import {
    Button,
    Dropdown,
    DropdownButton,
    Form,
    FormControl,
    FormLabel,
    FormSelect,
    InputGroup,
    Row
} from "react-bootstrap";
import {FormDebugger} from "./FormDebugger";
import {ImageDropZone} from "./ImageDropZone";


export const PostFormContent = (props) => {
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
    if (values.postPicture !== ""){
        console.log(values.postPicture.get("image"))
    }

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <InputGroup>
                    <div>

                        {/*Title Input*/}
                        <FormLabel>Post Title</FormLabel>
                        <input id={"postTitle"} placeholder={"Write a title for your Post"}
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
                        <ImageDropZone
                            formikProps={{
                                values,
                                handleChange,
                                handleBlur,
                                setFieldValue,
                                fieldValue:"postPicture"
                            }}
                        />
                        {
                            errors.postPicture && touched.postPicture && (
                                <div className="alert alert-danger">
                                    {errors.postPicture}
                                </div>
                            )
                        }
                        {/*Select Category*/}



                        {/*Post Description*/}
                        <FormLabel className="my-2">Post Content: describe what you are offering or looking for!</FormLabel>
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
                        <FormLabel className="my-2">Harvest or Hands</FormLabel>
                    <div>
                        {/*<DropdownButton*/}
                        {/*    variant="outline-secondary"*/}
                        {/*    title="Dropdown"*/}
                        {/*    id="input-group-dropdown-1"*/}
                        {/*>*/}
                        {/*    <Dropdown.Item href="#harvest">Harvest</Dropdown.Item>*/}
                        {/*    <Dropdown.Item href="#hands">Hands</Dropdown.Item>*/}
                        {/*</DropdownButton>*/}
                        <FormSelect
                            className="form-control"
                            name="postCategory"
                            type="text"
                            value={values.postCategory}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                        <option>Choose a category</option>
                        <option value="harvest">Harvest</option>
                        <option value="hands">Hands</option>
                        </FormSelect>
                    </div>
                        {
                            errors.postCategory&& touched.postCategory && (
                                <div className="alert alert-danger">
                                    {errors.postCategory}
                                </div>
                            )
                        }

                    <div className={"mt-3"}>
                        <Button className="btn btn-primary m-2" type="submit">Post</Button>

                        <Button
                            className="btn btn-secondary m2-2" type="cancel"
                            onClick={handleReset}
                            // disabled={!dirty || isSubmitting}
                        >Reset form
                        </Button>
                    </div>
                    </div>

                    </InputGroup>
            {/*<FormDebugger {...props} />*/}
            {

            }
                status && (<div className={status.type}>{status.message}</div>)
            </form>
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



