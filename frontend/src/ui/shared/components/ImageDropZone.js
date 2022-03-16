import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
;

export function ImageDropZone({formikProps}) {

    const onDrop = useCallback(acceptedFiles => {

        const formData = new FormData();
        formData.append('image', acceptedFiles[0]);

        const fileReader = new FileReader()
        fileReader.readAsDataURL(acceptedFiles[0])
        fileReader.addEventListener("load", () => {
           formikProps.setSelectedImage(fileReader.result)
        })

        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});


    return (
        <div className="form-group" {...getRootProps()}>
            <div className="input-group input-group-lg">
                <input
                    className="form-control-file"
                    accept="image/*"
                    onChange={formikProps.handleChange}
                    onBlur={formikProps.handleBlur}
                    {...getInputProps()}
                />
                {
                    isDragActive ?
                        <p>Drop the picture here ...</p> :
                        <p>Drag and drop a picture, or click to select from file</p>
                }
            </div>
        </div>
    )
}