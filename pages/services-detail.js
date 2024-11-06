import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import Partner from '@/public/img/partner.png'
import ServiceBanner from "@/components/service/banner";
import ServicesSection from "@/components/service/servicelisting";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { ServicesApi } from "@/Datas/Endpoints/Services";
import React from "react";
import BannerPlaceholder from '@/public/img/banners/placeholder.svg'
import FAQAccordion from "@/components/service/FAQAccordion";

const inter = Inter({ subsets: ["latin"] });

export default function About({general, data}) {
    return (
        <Layout general={general} data={data}>

            <div className="service-detail-banner">
                
                        <Image src={BannerPlaceholder} width={1400} height={600} alt={"Service Name"}
                               className=' w-full img-responsive' />
                    
            </div>

            <div className="container pt-10">
                <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                    <span className="text-dark home-title"
                                          dangerouslySetInnerHTML={{__html: 'What is Competitive Marketing Analytics?'}}/>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4 justify-content-center">
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                <div className="bg-image-sec">
                                    <p className="w-auto mt-0 text-center mb-2 dark-black">
                                        {'Competitive marketing analytics entails gathering, evaluating, and interpreting data on rival companies’ strategies to comprehend their strengths, weaknesses, potential opportunities, and possible threats. By conducting this analysis, businesses can gain valuable insights into their competitors, market trends, and strategies. Moreover, businesses can utilize tools like SWOT analysis to identify opportunities and risks. TurnB\'s competitive marketing analytics helps businesses outperform competitors to strengthen their market position, boost customer satisfaction, and drive growth.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="container mt-10">
                <div class="bg-partner mb-lg-5 mb-md-5 mb-3 p-5 clearfix">
                    <div class="about-cont2 mt-lg-5 mt-md-5 mt-3 mb-lg-5 mb-md-5 mb-3 clearfix">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="position-relative" data-aos="fade-down">
                                    <h2 class="title-ak2 text-dark  text-lf mb-lg-3 mb-md-3 mb-3 mt-lg-0 mt-md-0 mt-4">
                                    Who Benefits from Competitive Marketing Analytics?

                                    </h2>
                                    <div class="boxline-new2 mt-lg-3 mt-md-3 mt-2"></div>
                                    <div class="text-lf position-relative" data-aos="fade-down">
                                        <div class="bg-image-sec">
                                            <p class="w-auto mt-0 mb-2">
                                            Competitive marketing analytics is very beneficial to stakeholders in a variety of industries because it provides insightful information. Companies can use competitive analysis to improve their market position, drive innovation, make well-informed decisions, and seize new opportunities.
                                            </p>

                                            <ul>
                                                <li><b>Business Owners and Executives:</b> Enhance strategic planning, growth, and market presence through a thorough understanding of the competitive landscape.</li>

                                                <li><b>Marketing Teams:</b> Increase campaign efficiency, enhance targeting, and refine messaging through competitor analysis.</li>

                                                <li><b>Sales Teams:</b> Strengthen sales pitches by integrating competitor insights, enabling better differentiation and more impactful client engagement.</li>

                                                <li><b>Product Development Teams:</b> Identify market opportunities, create new products, and enhance existing ones by addressing competitor weaknesses and customer demands.</li>

                                                <li><b>Investors and Stakeholders:</b> Evaluate a company’s position against competitors and identify growth opportunities to make informed decisions.</li>

                                                <li><b>SMEs and Startups:</b> Analyze the strategies of market leaders to gain a competitive advantage and improve your offerings.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="text-lf position-relative" data-aos="fade-down">
                                    <Image width={300} height={279} src={Partner} class="img-responsive imgrit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container pt-10">
                <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                    <span className="text-dark home-title"
                                          dangerouslySetInnerHTML={{__html: 'How to Conduct Competitive Marketing Analytics'}}/>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4 justify-content-center">
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                <div className="bg-image-sec">
                                    <p className="w-auto mt-0 text-center mb-2 dark-black">
                                        {'For companies of all sizes, a competitive analysis is an essential tool. It provides you with insightful knowledge about the strategies used by your competitors, enabling you to improve your own approach and maintain an advantage over them.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <section className="text-center pt-3 mt-lg-1 mt-md-1 mt-1">
                <div className="container">
                    {/* SLIDER */}
                    <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicatorsnew">
                        <div className="carousel-inner" style={{ overflow: 'hidden' }}>
                            <div className="carousel-item active">
                                <div className="row">
      
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="career-box border-non-serices mb-lg-5 mb-md-5 mb-3 clearfix">
                                   
                                                            <div className="row g-0 Competitive-Marketing-Analytics-block">
                                                                <div className="col-lg-3 col-md-3 col-12 pd-ridser">
                                                                    <Image width={401} height={268} src={Partner} className="img-fluid aos-init aos-animate brradis-one" data-aos="fade-down" />
                                                                </div>
                                                                <div className="col-lg-9 col-md-9 col-12 bg-services-box">
                                                                    <div className="pt-lft pt-lg-4 pt-md-4 pt-3 pb-0 text-left clearfix aos-init aos-animate" data-aos="fade-up">
                                                                        <h5 className="clr-grn mt-0 mb-2"><span className="ft-wt2">Step 1: Define Your Goals</span></h5>
                                                                        <p className="mb-0">Well-defined objectives are essential to a successful competitive analysis. Begin by generating ideas about your desired outcomes. If you aim to boost brand awareness, attract fresh clientele, refine marketing strategies for better leads or sales, or establish a stronger pricing strategy. After creating a list of potential goals, prioritize them based on their importance to your business. Keep your top priorities in mind as you refine your goals into specific research questions to sharpen your focus.

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
                                                            </div>
                                                </div>
                                            </div>
                                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container pt-10">
                <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                    <span className="text-dark home-title"
                                          dangerouslySetInnerHTML={{__html: 'How Does Competitive Marketing Analytics Influence Customer Behavior'}}/>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4 justify-content-center">
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                <div className="bg-image-sec">
                                    <p className="w-auto mt-0 text-center mb-2 dark-black">
                                        {'Businesses can better align their offerings with customer preferences by using competitive marketing analytics, which provides insights into the strategies of their rivals. This in turn influences customer behavior. Companies can improve their marketing strategies by studying competitor pricing, promotions, and customer engagement techniques. By analyzing data, businesses can identify gaps in competitors’ services or unmet customer needs, enabling them to customize products and improve customer satisfaction. Companies can position themselves as more attractive options and shape customer decisions by offering personalized and competitive alternatives.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container pt-10">
                <div className="about-cont2 mt-lg-3 mt-md-3 mt-2 mb-lg-5 mb-md-5 mb-3 clearfix">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="text-center position-relative aos-init aos-animate" data-aos="fade-down">
                                <h1 className="title-ak2 ft-wt2 text-center mb-lg-2 mb-md-2 mb-2 mt-lg-0 mt-md-0 mt-0">
                                    <span className="text-dark home-title"
                                          dangerouslySetInnerHTML={{__html: 'About TurnB -Our Services in Competitive Marketing Analytics'}}/>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4 justify-content-center">
                        <div className="col-lg-10 col-md-10 col-12">
                            <div className="text-justify position-relative aos-init aos-animate" data-aos="fade-up">
                                <div className="bg-image-sec">
                                    <p className="w-auto mt-0 text-center mb-2 dark-black">
                                        {'At TurnB, we specialize in competitive marketing analytics, which helps companies stay ahead of the competition. We can accomplish more accurate customer targeting by utilizing our proficiency in trend identification, campaign evaluation, and strategy refinement. Our data-driven insights can help you outperform competitors, improve pricing strategies, and fine-tune your marketing approach. In addition to offering analytics, TurnB works with you to accomplish business success by utilizing data expertise and a deep comprehension of your goals to drive growth and create lasting relationships with customers. Choose TurnB for strategic insights that transform your business.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container pt-10">
                <FAQAccordion />
            </div>


        </Layout>
    );
}


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await ServicesApi.index()

        return {
            props: {
                general: general?.data,
                data: data?.data?.data,
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error('Error fetching header data contact:', error);

        return {
            props: {
                header: null, // or handle the error in a way that makes sense for your application
            },
            revalidate: 10,
        };
    }
}