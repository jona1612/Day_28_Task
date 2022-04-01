import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
    let users = [
        {
            Name: "Raja",
            Position: "FSD",
            Office: "Amazon",
            Age: 23,
            StartDate: "30.03.2022",
            Salary: 55000,
        },
        {
            Name: "Sai Guru",
            Position: "Executive",
            Office: "Accenture",
            Age: 24,
            StartDate: "30.03.2022",
            Salary: 35000,
        },
        {
            Name: "Jonathan",
            Position: "FSD",
            Office: "Amazon",
            Age: 25,
            StartDate: "30.03.2022",
            Salary: 55000,
        },
        {
            Name: "Rajesh",
            Position: "Testing",
            Office: "TCS",
            Age: 23,
            StartDate: "30.03.2022",
            Salary: 55000,
        },
        {
            Name: "Vignesh",
            Position: "FSD",
            Office: "Infosys",
            Age: 25,
            StartDate: "30.03.2022",
            Salary: 55000,
        },
        {
            Name: "Tamizh",
            Position: "Developer",
            Office: "Google",
            Age: 23,
            StartDate: "30.03.2022",
            Salary: 55000,
        },
    ]

    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 ms-3 text-gray-800">User Lists</h1>
                <Link to={"/create-user"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm me-3"><i
                    class=" fa-sm text-white-50"></i> Create User</Link>
            </div>


            {/* <!-- DataTales Example --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map((user) => {
                                        return <tr>
                                            <td>{user.Name}</td>
                                            <td>{user.Position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.Age}</td>
                                            <td>{user.StartDate}</td>
                                            <td>{user.Salary}</td>
                                            <td>
                                                <button className='btn btn-warning btn-sm'>View</button>
                                                <button className='btn btn-primary btn-sm m-1'>Edit</button>
                                                <button className='btn btn-danger btn-sm'>Delete</button>

                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Users