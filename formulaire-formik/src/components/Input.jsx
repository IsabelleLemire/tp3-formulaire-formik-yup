import React from 'react';
import Form from 'react-bootstrap/Form';
import { useField } from 'formik';

const Input = ({ id, label, ...rest }) => {
    const [field, meta] = useField(id);
    const isError = meta.touched && meta.error;

    return (
        <Form.Group>
            {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
            <Form.Control isInvalid={isError} {...field} {...rest} />
            {isError && <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>}
        </Form.Group>
    );
};

export default Input;
