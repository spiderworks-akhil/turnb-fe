import Image from 'next/image'
import React from 'react'

function CaseStudyApproaches({ data }) {
    return (
        <div className='container'>
            <div
                style={{
                    padding: '20px 0',
                    backgroundColor: '#ffffff',
                    marginBottom: '40px',
                    borderRadius: '8px',
                }}
            >

                <div className='row'>
                    <div className='col-12'>
                        <div className='turnb-approch pt-lg-4 p-md-4 pt-3 pb-lg-4 pb-md-4 pb-3 mt-lg-4 mt-md-4 mt-4 mb-lg-5 mb-md-5 mb-5 clearfix'>
                            <div className='case-study-approach'>

                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-12">
                                        <h2>TurnB Approach</h2>
                                        <span class="line-turnb"></span>
                                        <br />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-12">
                                        <div className='turnb-txt case-study-image' dangerouslySetInnerHTML={{ __html: data?.content?.description_2 }} />

                                        {/* <p>
        We identified and extracted relevant data elements from the
        client’s database and checked its accuracy. Following approaches
        were used:
    </p> */}

                                        {/* {[
        {
            img: '/img/c1-blue.png',
            text: 'An exhaustive list of factors was identified, and hypotheses were formulated.',
        },
        {
            img: '/img/c1-darkblue.png',
            text: 'Each hypothesis was tested, and exploratory analysis was performed on them.',
        },
        {
            img: '/img/c1-blue.png',
            text: 'The team designed a model using Python that estimated incentive pay-outs and revenue.',
        },
        {
            img: '/img/c1-darkblue.png',
            text: 'A Power BI dashboard was developed to track program performance.',
        },
    ].map((item, index) => (
        <div className="row" key={index} style={{ marginBottom: '10px' }}>
            <div className="col-lg-1 col-md-1 col-2">
                <Image
                    src={item.img}
                    alt="Approach"
                    width={15}
                    height={15}
                />
            </div>
            <div className="col-lg-11 col-md-11 col-10">
                <p>{item.text}</p>
            </div>
        </div>
    ))} */}

                                        {/* <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-lg-1 col-md-1 col-2">
            <Image
                src="/img/c1-blue.png"
                alt="Approach"
                width={15}
                height={15}
            />
        </div>
        <div className="col-lg-11 col-md-11 col-10">
            <p>We monitored the performance and suggested corrections as needed.</p>
        </div>
    </div> */}
                                    </div>

                                    {/* Image on the Right */}
                                    <div className="col-lg-5 col-md-5 col-12">
                                        <Image
                                            src={`/img/case-stuimg.png`}
                                            alt='Approaches background'
                                            // src={data?.content?.media_id_2?.file_path}
                                            // alt={data?.content?.media_id_2?.alt_text}
                                            width={647}
                                            height={362}
                                            className="img-fluid pb-lg-0 pb-md-4 pb-5"
                                        />
                                    </div>
                                </div>
                                <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
                                    <Image
                                        src="/img/infograph-img.png"
                                        alt="Infograph"
                                        width={150}
                                        height={278}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CaseStudyApproaches
