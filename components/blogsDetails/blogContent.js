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
                            data?.content?.map((obj)=>(
                                {obj}
                            ))
                        } */}

                        {
                            data?.content?.map((obj, index) => (
                                    <div key={index} className="col-lg-12 col-md-12 col-12" data-aos="fade-up" data-aos-duration="3000">
                                        <div className="real-timebox real-boxheit position-relative p-3 clearfix mb-lg-4 mb-md-4 mb-3">
                                            <h5 className="clrblue-s m-0 p-0 mb-2">
                                                {obj?.title}
                                            </h5>
                                            <div dangerouslySetInnerHTML={{ __html: obj?.description }} />
                                            <div style={{backgroundColor:index%2==0?'#327cbe':'#068283'}} className={`line-leftblue`}></div>
                                            <div style={{backgroundColor:index%2==0?'#327cbe':'#068283'}} className={`line-rightblue`}></div>

                                            {/* <div className={`${index%2==0?'line-leftblue':'line-leftreal'}`}></div>
                                            <div className={`${index%2==0?'line-rightblue':'line-rightreal'}`}></div> */}
                                        </div>
                                    </div>
                                  
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>

    )
}

export default BlogContent
