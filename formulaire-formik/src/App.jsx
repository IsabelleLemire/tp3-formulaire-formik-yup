import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import * as Yup from 'yup';

import GenericForm from './components/Form';

const formFields = [
    { id: 'name', label: 'Name' },
    { id: 'lastname', label: 'Last Name' },
    { id: 'email', label: 'E-mail' },
    { id: 'password', label: 'Password', type: 'password' },
];

const initialValues = {
    email: '',
    password: '',
    name: '',
    lastname: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
});

function App() {
    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <Card.Title>Learn to code by watching others</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptas voluptate, in
                                aspernatur sed asperiores enim commodi hic odit veritatis iusto nulla doloremque fuga
                                impedit deserunt ex pariatur nisi cupiditate?
                            </Card.Text>
                        </Container>
                    </Col>
                    <Col>
                        <Row>
                            <Card.Text>Try it free 7 days then @20/mo. thereafter</Card.Text>
                        </Row>
                        <Row>
                            <GenericForm
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                                fields={formFields}
                            />
                        </Row>
                        <Row>
                            <Card.Text>By clicking the button bla bla blas</Card.Text>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
