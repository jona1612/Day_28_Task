import React from 'react'

function Dashbox(props) {
    return (
        <>
            {/* <!-- Content Row --> */}
            <div class="col-xl-3 col</div>-md-6 mb-4">
                <div class={`${props.dashboard.side ? `border-left-primary` : `border-left-success`} ${props.dashboard.side1 ? `border-left-info` : ``} ${props.dashboard.side2 ? `border-left-warning` : ``} card  shadow h-100 py-2`}>
                    <div class="card-body">
                        <div class="row text-xs no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class={`${props.dashboard.color ? `text-primary` : `text-success`} ${props.dashboard.color1 ? `text-info` : ``} ${props.dashboard.color2 ? `text-warning` : ``}  font-weight-bold  mb-1`}>
                                    {props.dashboard.type}</div>
                                <div class="h5 mb-0 font-weight-bold  text-gray-800">{props.dashboard.comp}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default Dashbox