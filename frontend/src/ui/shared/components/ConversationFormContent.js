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
                    <div>

                        {/*Title Input*/}
                        <FormLabel>Create a message</FormLabel>
                        <input id={"conversationContent"} placeholder={"Type your message here"}
                               className="form-control"
                               name="conversationContent"
                               value={values.conversationContent}
                               onChange={handleChange}
                               onBlur={handleBlur}
                        />
                        {
                            errors.conversationContent && touched.conversationContent && (
                                <div className="alert alert-danger">
                                    {errors.conversationContent}
                                </div>
                            )
                        }

                        <div className={"mt-3"}>
                            <Button className="btn btn-primary mb-2" type="submit">Send</Button>

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


