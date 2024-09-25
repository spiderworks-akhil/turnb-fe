import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import CaseStudyDetailBanner from "@/components/caseStudyDetail/banner";
import CaseStudyChallenge from "@/components/caseStudyDetail/challenge";
import Implications from "@/components/caseStudyDetail/implications";
import CaseStudyApproaches from "@/components/caseStudyDetail/approaches";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { CaseStudyApi } from "@/Datas/Endpoints/CaseStudy";

const inter = Inter({ subsets: ["latin"] });

export default function Slug({ general, data }) {
    return (
        <Layout general={general} data={data}>
            <CaseStudyDetailBanner data={data} />
            <CaseStudyChallenge data={data} />
            <CaseStudyApproaches data={data} />
            <Implications data={data} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const list = [
        { slug: '5563738' }
    ]
    const paths = list?.map((item) => ({
        params: { slug: item?.slug },
    })) || [];

    return { paths, fallback: 'blocking' };
}


export async function getStaticProps(context) {
    try {

        const general = await MenuApi.genralSettings()
        const data = await CaseStudyApi.detail({ slug: context?.params?.slug })
        return {
            props: {
                general: general?.data, data: data?.data?.data
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error('Error fetching header data:', error);

        return {
            props: {
                header: null, // or handle the error in a way that makes sense for your application
            },
            revalidate: 10,
            notFound: true
        };
    }
}
