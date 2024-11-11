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