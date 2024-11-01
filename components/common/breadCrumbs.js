import Link from 'next/link'
import React from 'react'

function BreadCrumbs({ secondCrumb, secondCrumbLink, thirdCrumb }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3">
                            <li className="breadcrumb-item"><Link className='bread-crumb-link' href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {
                                    thirdCrumb ?
                                        <Link className='bread-crumb-link' href={`/${secondCrumbLink}` || '#'}>{secondCrumb} </Link>
                                        :
                                        secondCrumb
                                }
                            </li>
                            {
                                thirdCrumb &&
                                <li className="breadcrumb-item active" aria-current="page">{thirdCrumb}</li>
                            }
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbs
