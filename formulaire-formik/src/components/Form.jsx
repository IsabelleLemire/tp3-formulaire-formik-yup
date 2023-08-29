import { useState } from 'react';
import BsForm from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Input from './Input';
import { Formik, Form, ErrorMessage } from 'formik'; // Importez ErrorMessage depuis Formik

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        lastname: '',
    });

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.lastname) {
            errors.lastname = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        }

        return errors;
    };

    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Formik
            initialValues={formData}
            validate={validate} // Ajoutez la fonction de validation
            onSubmit={onSubmit}
        >
            <Form>
                <Row>
                    <Input label="Name" id="name" name="name" />
                    <ErrorMessage name="name" component="div" className="text-danger" /> {/* Affiche les erreurs */}
                </Row>
                <Row>
                    <Input label="Last Name" id="lastname" name="lastname" />
                    <ErrorMessage name="lastname" component="div" className="text-danger" /> {/* Affiche les erreurs */}
                </Row>
                <Row>
                    <Input label="E-mail" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="text-danger" /> {/* Affiche les erreurs */}
                </Row>
                <Row>
                    <Input label="Password" type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className="text-danger" /> {/* Affiche les erreurs */}
                </Row>

                <Button type="submit" variant="danger">Claim your free trial</Button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
