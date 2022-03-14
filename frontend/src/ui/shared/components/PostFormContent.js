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
            <form  onSubmit={handleSubmit}>
                <InputGroup>
                    <div>

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
                               placeholder="Add Image"
                               value={values.postPicture}
                               onChange={handleChange}
                               onBlur={handleBlur}
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
                        <FormLabel>Harvest or Hands</FormLabel>
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
                        <Button className="btn btn-primary mb-2" type="submit">Post</Button>

                        <button
                            className="btn btn-secondary mb-2"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                        >Cancel
                        </button>
                    </div>
                    </div>

                    </InputGroup>
            {/*<FormDebugger {...props} />*/}
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
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



