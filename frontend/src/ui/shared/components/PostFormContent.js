import React from "react";
import {Button, Dropdown, DropdownButton, Form, FormLabel, Row} from "react-bootstrap";


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
                        <input id={"postTitle"} placeholder={"Custom Title"}/>
                        {/*Image Input*/}
                        <FormLabel>Image</FormLabel>
                        <input className="form-control" type={"file"} id="addPicture"
                               placeholder="Add Image"/>                        {/*Select Category*/}
                        <FormLabel>Harvest or Hands</FormLabel>
                        <DropdownButton id="dropdown-basic-button" title="Category">
                            <Dropdown.Item href="#/action-1">Harvest</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Hands</Dropdown.Item>
                        </DropdownButton>
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
                    {
                        errors.postContent && touched.postContent && (
                            <div className="alert alert-danger">
                                {errors.postContent}
                            </div>
                        )
                    }
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



