import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import AboutBanner from "@/components/about/banner";
import AboutWhoWeAreSection from "@/components/about/who_we_are";
import AboutWhyUsBanner from "@/components/about/why_us";
import CoreValuesSection from "@/components/about/core";
import MilestonesSection from "@/components/about/milestones";
import KeyMembersSection from "@/components/about/members";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { AboutApi } from "@/Datas/Endpoints/About";

const inter = Inter({ subsets: ["latin"] });

export default function About({general, data}) {
    console.log(data);
    
    return (
        <Layout general={general} data={data}>
            <AboutBanner data={data} />
            <AboutWhoWeAreSection data={data} />
            <AboutWhyUsBanner data={data} />
            <CoreValuesSection />
            <MilestonesSection />
            <KeyMembersSection />
        </Layout>
    );
}


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await AboutApi.index()

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