import React from "react";
import {
    Button, Col, Container,
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


export const ConversationFormContent = (props) => {
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
                    <Container>
                        <div className={"row my-1"}>
                            <Col>
                                {/*Title Input*/}
                                <input id={"conversationContent"} placeholder={"Type your message here"}
                                       className="form-control"
                                       name="conversationContent"
                                       value={values.conversationContent}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                />
                            </Col>
                            <Col>

                                <div>
                                    <Button className="btn btn-primary mb-2" type="submit">Send</Button>

                                    <button
                                        className="btn btn-secondary mb-2"
                                        onClick={handleReset}
                                        disabled={!dirty || isSubmitting}
                                    >Cancel
                                    </button>
                                </div>
                            </Col>
                        </div>
                        <Row>
                            {
                                errors.conversationContent && touched.conversationContent && (
                                    <div className="alert alert-danger">
                                        {errors.conversationContent}
                                    </div>
                                )
                            }
                        </Row>
                    </Container>

                </InputGroup>
                {/*<FormDebugger {...props} />*/}
                {
                    // status && (<div className={status.type}>{status.message}</div>)
                }
            </form>
        </>
    )
};


