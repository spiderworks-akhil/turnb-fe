import Image from 'next/image'
import React from 'react'
import Partner from '@/public/img/partner.png'


function FourthSection({ data }) {
    return (
        <>
            {
                (data?.content?.title_3 || data?.content?.description_3) &&
                <div className="container pt-10">
                    <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                    <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                        <span className="text-dark home-title">
                                            {data?.content?.title_3}
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="row p-4 justify-content-center">
                            <div className="col-lg-10 col-md-10 col-12">
                                <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                    <div className="ser_desc_text" dangerouslySetInnerHTML={{ __html: data?.content?.description_3 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                data?.listing_content?.length > 0 &&
                <section className="text-center pt-3 mt-lg-1 mt-md-1 mt-1">
                    <div className="container">
                        {/* SLIDER */}
                        <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                            <div className="carousel-inner" style={{ overflow: 'hidden' }}>
                                <div className="carousel-item active">
                                    <div className="row">

                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">

                                                {
                                                    data?.listing_content?.map((obj, index) => (

                                                        <div key={index} className="row g-0 Competitive-Marketing-Analytics-block">
                                                            {
                                                                obj?.media_id?.file_path &&
                                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                                    <Image width={401} height={268} src={obj?.media_id?.file_path} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                                </div>
                                                            }
                                                            <div className={`${obj?.media_id?.file_path ? "col-lg-9 col-md-9" : "col-lg-12 col-md-12"}col-lg-9 col-md-9 col-12 bg-services-box`}>
                                                                <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                                    <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">{obj?.title}</span></h5>
                                                                    <div dangerouslySetInnerHTML={{ __html: obj?.detailed_description }} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))
                                                }


                                                {/* <div className="row g-0 Competitive-Marketing-Analytics-block">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <Image width={401} height={268} src={Partner} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Step 2: Identify Your Competitors
                                                        </span></h5>
                                                        <p className="mb-0">You can compare your offerings and learn more about the competitive environment by identifying your competitors. Start by determining who your direct competitors are—companies that target the same market and provide comparable goods or services. Next, consider indirect competitors. These companies provide products or services that address the same needs of customers but in different ways.  Direct and indirect competitors can be discovered by referring to resources such as industry reports, online directories, trade exhibitions, customer reviews, and social media tools.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row g-0 Competitive-Marketing-Analytics-block">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <Image width={401} height={268} src={Partner} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Step 3: Gather Information
                                                        </span></h5>
                                                        <p className="mb-0">The next stage is data collection, which comes after identifying your competitors. This data is essential to your analysis. To gain an understanding of competitors&apos; product offerings, pricing structures, target markets, and customer service approaches, start by looking through their websites. Examine their return policies and promotions to learn about their customer service philosophy.


                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row g-0 Competitive-Marketing-Analytics-block">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <Image width={401} height={268} src={Partner} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Step 4: Analyze the Competition
                                                        </span></h5>
                                                        <p className="mb-0">With a wealth of data, the next step is to transform it into actionable insights. To evaluate competitors, use a SWOT analysis to analyze their advantages, disadvantages, opportunities, and threats. Strong brand recognition and superior product features are examples of strengths; on the other hand, limited product offerings and poor customer support are examples of weaknesses. Growing market demand and new technologies offer opportunities while rising costs and emerging regulations pose threats.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row g-0 Competitive-Marketing-Analytics-block">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <Image width={401} height={268} src={Partner} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Step 5: Take Advantage of Competitive Insights</span></h5>
                                                        <p className="mb-0">Depending on how you apply the knowledge you&apos;ve gained from a competitive analysis, it can be valuable. By understanding the competitive landscape, you can find untapped opportunities to fulfill customer needs. It’s possible that they are overlooking a niche market or a specific product feature that customers want. Adjust your marketing strategy using this valuable information.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row g-0 Competitive-Marketing-Analytics-block">
                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                    <Image width={401} height={268} src={Partner} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                </div>
                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Step 6: Continuously Monitor
                                                        </span></h5>
                                                        <p className="mb-0">The business environment is dynamic, and competitors are constantly changing as well.  Staying ahead of the competition requires constant observation. Keeping track of competitor activities helps in staying informed about any changes in their strategy. Periodic assessments, such as quarterly or annual reviews, let you keep an eye on their activities and adjust your plans as necessary.

                                                        </p>
                                                    </div>
                                                </div>
                                            </div> */}


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default FourthSection
