import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import CaseBanner from "@/components/caseStudy/banner";
import CaseStudiesList from "@/components/caseStudy/caseStudies";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { CaseStudyApi } from "@/Datas/Endpoints/CaseStudy";

const inter = Inter({ subsets: ["latin"] });

export default function CaseStudy({ general, data,list }) {

    return (
        <Layout general={general} data={data}>
            <CaseBanner data={data} />
            <CaseStudiesList data={data} list={list} />
        </Layout>
    );
}


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await CaseStudyApi.index()
        const list = await CaseStudyApi.list()

        return {
            props: {
                general: general?.data,
                data: data?.data?.data,
                list:list?.data
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
