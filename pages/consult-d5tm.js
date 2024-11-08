import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ConsultBanner from "@/components/consult/banner";
import ConsultStages from "@/components/consult/stages";
import AnalyticalConsultingSpectrum from "@/components/consult/analytics";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { ConsultApi } from "@/Datas/Endpoints/Consult";


const inter = Inter({ subsets: ["latin"] });

export default function Consult({general,data}) {
    return (
        <Layout general={general} data={data}>
            <ConsultBanner data={data} />
            <ConsultStages data={data} />
            <AnalyticalConsultingSpectrum data={data} />
        </Layout>
    );
}

export async function getStaticProps() {
    try {
      const general = await MenuApi.genralSettings()
      const data = await ConsultApi.index()
  
      return {
        props: {
          general:general?.data,
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
  