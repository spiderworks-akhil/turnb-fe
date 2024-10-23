import React from 'react'

function BlogContent({ data }) {
    return (

        // <div className="container mt-lg-5 mt-md-5 mt-3">
        //     <div className="row justify-content-center">
        //         <div className="col-lg-11 col-md-11 col-12">
        //             <div dangerouslySetInnerHTML={{ __html: data?.content }} />
        //         </div>
        //     </div>
        // </div>

        <div class="container mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3">
            <div class="row justify-content-center">
                <div class="col-lg-11 col-md-11  col-12">
                    <div class="row justify-content-center">

                        {/* {
                            data?.content?.map((obj, index) => (
                                (index + 1 == data?.content?.length && data?.length % 2 != 0) ?
                                    <div key={index} className="col-lg-12 col-md-12 col-12" data-aos="fade-up" data-aos-duration="3000">
                                        <div className="real-timebox real-boxheit position-relative p-3 clearfix mb-lg-4 mb-md-4 mb-3">
                                            <h5 className="clrblue-s m-0 p-0 mb-2">
                                                The Future of Real-Time Data Analytics: A World of Endless Possibilities
                                            </h5>
                                            <p className="mb-0">
                                                What you've seen is just the tip of the iceberg in the realm of real-time data
                                                analytics. With technologies like Artificial Intelligence and Machine Learning at your disposal, the
                                                horizon stretches infinitely. Envision a future where real-time data analytics personalize every aspect
                                                of our lives, from tailored product recommendations to proactive healthcare
                                                interventions. Businesses will operate with unparalleled efficiency, anticipating needs and
                                                exceeding expectations at every turn. This isn't science fiction—it's the future we're building today.
                                            </p>
                                            <div className="line-leftblue"></div>
                                            <div className="line-rightblue"></div>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="3000">
                                        <div className="real-timebox position-relative p-3 clearfix mb-lg-4 mb-md-4 mb-3">
                                            <h5 className="blyeckr m-0 p-0 mb-2">
                                                City Planners & Public Officials: Transforming Cities into Living, Breathing Organisms
                                            </h5>
                                            <p className="mb-0">
                                                Picture a city that adapts to its residents' needs in real-time. Sensors embedded in traffic lights
                                                analyze traffic flow, dynamically adjusting light cycles to alleviate congestion during peak hours.
                                                Real-time data on energy consumption optimizes power grid usage, curbs costs, and promotes sustainability.
                                                Waste management becomes more efficient with real-time monitoring of bin fill levels, ensuring timely
                                                collections and minimizing unnecessary trips. This data-driven approach to city management creates a more
                                                efficient, sustainable, and livable urban environment.
                                            </p>
                                            <div className="line-leftreal"></div>
                                            <div className="line-rightreal"></div>
                                        </div>
                                    </div>
                            ))
                        } */}

                        <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="3000">
                            <div className="real-timebox position-relative p-3 clearfix mb-lg-4 mb-md-4 mb-3">
                                <h5 className="blyeckr m-0 p-0 mb-2">
                                    City Planners & Public Officials: Transforming Cities into Living, Breathing Organisms
                                </h5>
                                <p className="mb-0">
                                    Picture a city that adapts to its residents' needs in real-time. Sensors embedded in traffic lights
                                    analyze traffic flow, dynamically adjusting light cycles to alleviate congestion during peak hours.
                                    Real-time data on energy consumption optimizes power grid usage, curbs costs, and promotes sustainability.
                                    Waste management becomes more efficient with real-time monitoring of bin fill levels, ensuring timely
                                    collections and minimizing unnecessary trips. This data-driven approach to city management creates a more
                                    efficient, sustainable, and livable urban environment.
                                </p>
                                <div className="line-leftreal"></div>
                                <div className="line-rightreal"></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="3000">
                            <div className="real-timebox position-relative p-3 clearfix mb-lg-4 mb-md-4 mb-3">
                                <h5 className="blyeckr m-0 p-0 mb-2">
                                    Beyond the Brick-and-Mortar: Unveiling Customer Sentiment on the Web
                                </h5>
                                <p className="mb-0">
                                    The impact of real-time data analytics extends far beyond physical storefronts. By harnessing web and social
                                    media analytics tools, you gain invaluable insights into customer sentiment and online brand perception.
                                    Imagine having your finger on the pulse of what customers are saying about your brand across social media
                                    platforms and review sites. Real-time analytics can spot emerging trends, pinpoint areas for improvement
                                    based on customer feedback, and enable swift responses to concerns. This cultivates stronger customer
                                    relationships, fosters brand loyalty, and helps you navigate potential public relations hiccups in the
                                    digital age.
                                </p>
                                <div className="line-rightreal"></div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-12" data-aos="fade-up" data-aos-duration="3000">
                            <div className="real-timebox real-boxheit position-relative p-3 clearfix mb-lg-4 mb-md-4 mb-3">
                                <h5 className="clrblue-s m-0 p-0 mb-2">
                                    The Future of Real-Time Data Analytics: A World of Endless Possibilities
                                </h5>
                                <p className="mb-0">
                                    What you've seen is just the tip of the iceberg in the realm of real-time data
                                    analytics. With technologies like Artificial Intelligence and Machine Learning at your disposal, the
                                    horizon stretches infinitely. Envision a future where real-time data analytics personalize every aspect
                                    of our lives, from tailored product recommendations to proactive healthcare
                                    interventions. Businesses will operate with unparalleled efficiency, anticipating needs and
                                    exceeding expectations at every turn. This isn't science fiction—it's the future we're building today.
                                </p>
                                <div className="line-leftblue"></div>
                                <div className="line-rightblue"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogContent
