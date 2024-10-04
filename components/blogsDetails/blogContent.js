import React from 'react'

function BlogContent({ data }) {
    return (
        <div className="container mt-lg-5 mt-md-5 mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-11 col-md-11 col-12">
                    <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                </div>
            </div>
        </div>

    )
}

export default BlogContent
