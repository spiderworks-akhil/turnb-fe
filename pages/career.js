import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import CareerBanner from "@/components/career/banner";
import WhyWorkWithTurnB from "@/components/career/why-work-with";
import CareerSection from "@/components/career/career";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { CareerApi } from "@/Datas/Endpoints/Career";

const inter = Inter({ subsets: ["latin"] });

export default function Career({ general, data, jobs }) {

    const settings=general?.all_settings?.original?.data
    

    return (
        <Layout general={general} data={data}>
            <CareerBanner data={data} />
            <WhyWorkWithTurnB data={data} />
            <CareerSection data={data} jobs={jobs} settings={settings} />
        </Layout>
    );
}


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await CareerApi.index()
        const jobs = await CareerApi.jobs()

        return {
            props: {
                general: general?.data,
                data: data?.data?.data,
                jobs: jobs?.data
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
