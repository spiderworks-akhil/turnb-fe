import React from 'react'

function BreadCrumbs({secondCrumb,secondCrumbLink}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{secondCrumb}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbs
