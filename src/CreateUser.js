import { useFormik } from 'formik';
import React from 'react';

function CreateUser() {
    let formik = useFormik({
        initialValues: {
            name: '',
            position: '',
            office: '',
            age: 0,
            startDate: '',
            salary: 0,
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label>Name</label>
                        <input
                            type={'text'}
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="form-control"
                        />
                    </div>
                    <div className="col-lg-6">
                        <label>Position</label>
                        <input
                            type={'text'}
                            className="form-control"
                            name="position"
                            onChange={formik.handleChange}
                            value={formik.values.position}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label>Office</label>
                        <input
                            type={'text'}
                            className="form-control"
                            name="office"
                            onChange={formik.handleChange}
                            value={formik.values.office}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label>Age</label>
                        <input
                            type={'number'}
                            className="form-control"
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label>Start Date</label>
                        <input
                            type={'date'}
                            className="form-control"
                            name="startDate"
                            onChange={formik.handleChange}
                            value={formik.values.startDate}
                        />
                    </div>
                    <div className="col-lg-6">
                        <label>Salary</label>
                        <input
                            type={'number'}
                            className="form-control"
                            name="salary"
                            onChange={formik.handleChange}
                            value={formik.values.salary}
                        />
                    </div>
                    <div className="col-lg-6 mt-3">
                        <input type={'submit'} className="btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;
