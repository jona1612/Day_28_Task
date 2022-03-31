import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import usContext from './Usercontext';

function Table() {
    const userContext = useContext(usContext);
    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 ms-3 text-gray-800">Tables</h1>
                <Link to={"/create-user"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm me-3"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
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
                                    userContext.users.map((user) => {
                                        return <tr>
                                            <td>{user.Name}</td>
                                            <td>{user.Position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.Age}</td>
                                            <td>{user.StateDate}</td>
                                            <td>{user.Salary}</td>
                                            <td>
                                                <Link to={`/view/${user.Name}`} className='btn btn-warning btn-sm'>View</Link>

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

export default Table