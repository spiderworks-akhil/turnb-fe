import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ServiceBanner from "@/components/service/banner";
import ServicesSection from "@/components/service/servicelisting";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { ServicesApi } from "@/Datas/Endpoints/Services";
import React from "react";
import BannerPlaceholder from '@/public/img/banners/placeholder.svg'

const inter = Inter({ subsets: ["latin"] });

export default function About({general, data}) {
    return (
        <Layout general={general} data={data}>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Image src={BannerPlaceholder} width={1400} height={600} alt={"Service Name"}
                               className={"service-banner"}/>
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