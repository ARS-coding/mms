import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomErrorMessage from './CustomErrorMessage'

function AddMealForm({ postData }) {
    return (
        <div className="custom-form"> {/* custom class */}
            <h3 className="form-title">Add a new <span className="bg-dark light-colored">Meal!</span></h3>
            <Formik
                initialValues={{
                    title: "",
                    chef: "",
                    mealUrl: "",
                    ingredients: [],
                    steps: [],
                    priority: "",
                    status: "",
                }}
                validate={values => {
                    const errors = {};
                    if (!values.title || !values.mealUrl || !values.chef) {
                        if (!values.title) {
                            errors.title = "Required: Add the Meal's title please.";
                        }
                        if (!values.chef) {
                            errors.chef = "Required: Add the chef's name please.";
                        }

                        if (!values.mealUrl) {
                            errors.mealUrl = "Required: Add the meal's image url please.";
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
                            <Field type="text" name="title" placeholder="Branches Name..." />
                            <ErrorMessage name="title" component={CustomErrorMessage} />
                        </div>
                        <div className="input-group-div">
                            <Field type="text" name="chef" placeholder="Chef Name..." />
                            <ErrorMessage name="chef" component={CustomErrorMessage} />
                        </div>
                        <div className="input-group-div">
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="priority" value="High" />
                                    High
                                </label>
                                <label>
                                    <Field type="radio" name="priority" value="Medium" />
                                    Medium
                                </label>
                                <label>
                                    <Field type="radio" name="priority" value="Low" />
                                    Low
                                </label>
                            </div>
                        </div>
                        <div className="input-group-div">
                            <Field type="text" name="mealUrl" placeholder="https://example/image.png..." />
                            <ErrorMessage name="mealUrl" component={CustomErrorMessage} />
                        </div>
                        <button className="custom-btn-submit bg-dark" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddMealForm;