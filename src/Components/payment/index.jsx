import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Payment = ({ submit, setFormValues, preValues }) => {
    return (
        <Formik
            initialValues={preValues}
            validationSchema={Yup.object({
                cardName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                cardNumber: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
            })}
            onSubmit={(values) => {
                submit(2)
                setFormValues({ ...values, ...preValues })
            }}
        >
            <Form>
                <label htmlFor="cardName">Card Name</label>
                <Field name="cardName" type="text" />
                <ErrorMessage name="cardName" />

                <label htmlFor="cardNumber">Card Number</label>
                <Field name="cardNumber" type="text" />
                <ErrorMessage name="cardNumber" />

                <button onClick={() => submit(0)}>Back</button>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};