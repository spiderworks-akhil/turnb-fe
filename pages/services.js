import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ServiceBanner from "@/components/service/banner";
import ServicesSection from "@/components/service/servicelisting";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { ServicesApi } from "@/Datas/Endpoints/Services";

const inter = Inter({ subsets: ["latin"] });

export default function About({general, data}) {
    return (
        <Layout general={general} data={data}>
           <ServiceBanner data={data} />
           <ServicesSection data={data} />
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