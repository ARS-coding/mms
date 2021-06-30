import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomErrorMessage from './CustomErrorMessage'
import './../../assets/css/add_branch_form.css'

const AddBranchForm = ({ postData }) => (


    <div className="add-branch-form">
        <h3 className="form-title">Add new <span className="bg-dark light-colored">Branch!</span></h3>
        <Formik
            initialValues={{ branchName: '', branchLocation: '', branchAvatar: '' }}
            validate={values => {
                const errors = {};
                if (!values.branchName || !values.branchLocation || !values.branchAvatar) {
                    if (!values.branchName) {
                        errors.branchName = "Required: Add the branche's name please.";
                    }
                    if (!values.branchLocation) {
                        errors.branchLocation = "Required: Add the branche's location please";
                    }
                    if (!values.branchAvatar) {
                        errors.branchAvatar = "Required: Add the branche's image url please.";
                    }
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    postData(values);
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='flex  flex-col form-input add-branch'>
                    <div className="input-group-div">
                        <Field type="text" name="branchName" placeholder="Branches Name..." />
                        <ErrorMessage name="branchName" component={CustomErrorMessage} />
                    </div>
                    <div className="input-group-div">
                        <Field type="text" name="branchLocation" placeholder="Location: Istanbul/Fatih..." />
                        <ErrorMessage name="branchLocation" component={CustomErrorMessage} />
                    </div>
                    <div className="input-group-div">
                        <Field type="text" name="branchAvatar" placeholder="https://example/image.png..." />
                        <ErrorMessage name="branchAvatar" component={CustomErrorMessage} />
                    </div>
                    <button className="custom-btn-submit bg-dark" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);

export default AddBranchForm;