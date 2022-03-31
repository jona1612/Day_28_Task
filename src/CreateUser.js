import React, { useContext } from 'react'
import { useFormik } from 'formik'
import usContext from './Usercontext';

function CreateUser() {
    const userContext = useContext(usContext);

    let formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: 0,
            startDate: "",
            salary: 0,
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = "Name Should Be Must";
            }
            if (!values.age || values.age < 18) {
                errors.age = "Age Should Be Above 18"
            }
            if (!values.position) {
                errors.position = "Position Should Be Must"
            }
            if (!values.office) {
                errors.office = "Enter Your Office Name"
            }
            if (!values.salary) {
                errors.salary = "Enter Your Salary"
            }
            if (!values.startDate) {
                errors.startDate = "Date Should Be Must"
            }
            return errors;
        },

        onSubmit: (values) => {
            userContext.setUsers([...userContext.users, values])
            console.log(values)
        },

    });

    return (
        <div className='container'>
            <p>
                <h3>Create User</h3>
            </p>
            <form onSubmit={formik.handleSubmit}>

                <div className='row'>

                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input className='form-control' name="name" onChange={formik.handleChange} value={formik.values.name} type={"text"} style={{ border: formik.errors.name ? `1px solid red` : `` }} />
                        <span style={{ color: 'red' }}>{formik.errors.name}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Position</label>
                        <input className='form-control' name="position" onChange={formik.handleChange} value={formik.values.position} type={"text"}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label>Office</label>
                        <input className='form-control' name="office" onChange={formik.handleChange} value={formik.values.office} type={"text"}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label>Age</label>
                        <input className='form-control' name="age" onChange={formik.handleChange} value={formik.values.age} type={"number"} style={{ border: formik.errors.name ? `1px solid red` : `` }} />
                        <span style={{ color: 'red' }}>{formik.errors.age}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Start Date</label>
                        <input className='form-control' name="startDate" onChange={formik.handleChange} value={formik.values.startDate} type={"date"}></input>
                    </div>
                    <div className='col-lg-6'>
                        <label>Salary</label>
                        <input className='form-control' name="salary" onChange={formik.handleChange} value={formik.values.salary} type={"number"}></input>
                    </div>
                    <div className='col-lg-6 mt-3'>

                        <input className='btn btn-primary' disabled={Object.keys(formik.errors).length !== 0} type={"submit"}></input>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default CreateUser;