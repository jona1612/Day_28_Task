import React, { useContext } from 'react'
import Dashbox from './Dashbox'
import usContext from './Usercontext'

function Dashboard() {
    let dashboards = [
        {
            type: "EARNINGS (MONTHLY)",
            comp: "$40,000",
            color: true,
            side: true,
        },
        {
            type: "EARNINGS (ANNUAL)",
            comp: "$215,000",
            color: false,
            side: false,
        },
        {
            type: "TASKS",
            comp: "50%",
            color1: true,
            side1: true,
        },
        {
            type: "PENDING REQUESTS",
            comp: "18",
            color2: true,
            side2: true,
        }
    ]
    const userContext = useContext(usContext);
    return (
        <>
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 ms-3 text-gray-800">Dashboard</h1>

                </div>
                <p> {userContext.userName}</p>

                <div class="container-fluid">
                    <div class="row">
                        {
                            dashboards.map((box) => {
                                return <Dashbox dashboard={box} />
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard