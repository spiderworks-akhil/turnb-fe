import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import BannerIndustries from "@/components/industries/banner";
import RetailSection from "@/components/industries/description";
import SolutionAreas from "@/components/industries/solutions";
import IndustrySuccess from "@/components/industries/success";
import { IndustriesApi } from "@/Datas/Endpoints/Industries";
import { MenuApi } from "@/Datas/Endpoints/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Slug({ general, data }) {


    return (
        <Layout general={general} data={data}>
            <BannerIndustries data={data} />
            <RetailSection data={data} />
            {
                data?.content?.industries_process_listing_name?.list?.length > 0 &&
                <SolutionAreas data={data} />
            }
            {
                data?.case_studies?.length > 0 &&
                < IndustrySuccess data={data} />
            }
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
        const data = await IndustriesApi.detail({ slug: context?.params?.slug })
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

