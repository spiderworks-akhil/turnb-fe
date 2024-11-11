import React from 'react'

function FifthSection({data}) {
    return (
        <div className="container pt-10">
            <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                            <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                <span className="text-dark home-title">
                                    {data?.content?.title_4}
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row p-4 justify-content-center">
                    <div className="col-lg-10 col-md-10 col-12">
                        <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                            <div className="bg-image-sec">
                                <p className="w-auto mt-0 text-center mb-2 dark-black">
                                {data?.content?.description_4}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FifthSection
