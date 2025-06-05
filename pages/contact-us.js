import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ContactBanner from "@/components/contact/banner";
import ContactForm from "@/components/contact/form";
import ContactMap from "@/components/contact/map";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { ContactApi } from "@/Datas/Endpoints/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Contact({general, data}) {
    return (
        <Layout general={general} data={data}>
            <ContactBanner data={data} />
            <ContactForm data={data} />
            <ContactMap data={data} />  
        </Layout>
    );
}


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await ContactApi.index()

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
