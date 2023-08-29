import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Assurez-vous que vous importez Yup correctement
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Input from './Input';

const LoginForm = ({ initialValues, validationSchema, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <Row>
                    <Input label="Name" id="name" name="name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                </Row>
                <Row>
                    <Input label="Last Name" id="lastname" name="lastname" />
                    <ErrorMessage name="lastname" component="div" className="text-danger" />
                </Row>
                <Row>
                    <Input label="E-mail" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                </Row>
                <Row>
                    <Input label="Password" type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                </Row>

                <Button type="submit" variant="danger">
                    Claim your free trial
                </Button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
