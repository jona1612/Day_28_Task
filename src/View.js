import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function View() {
    let params = useParams()
    return (
        <>
            <div className='container '>
                <h3>User Details</h3>
            </div>
            <div className='container'>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Position</th>
                            <th scope='col'>Office</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>1</th>
                            <td>{params.id}</td>
                            <td>{params.id}</td>
                            <td>{params.id}</td>
                            <td>{params.id}</td>
                            <td>
                                <Link to={`/edit/${params.id}`} className='btn btn-primary btn-sm m-1'>Edit</Link>
                                {/* <button className='btn btn-primary btn-sm m-1'>Edit</button> */}
                                <button className='btn btn-danger btn-sm m-0'>Delete</button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default View