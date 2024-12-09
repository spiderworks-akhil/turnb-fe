import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import LifeBanner from "@/components/life/banner";
import LifeMiddleSection from "@/components/life/middle";
import BenefitsSection from "@/components/life/benefits";
import LifeTestimonials from "@/components/life/testimonial";
import LifeEventsSection from "@/components/life/events";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { LifeAtTurnBApi } from "@/Datas/Endpoints/LifeAtTurnb";
import Memories from "@/components/life/memori";

const inter = Inter({ subsets: ["latin"] });

export default function About({general,data}) {

    console.log(data);
    return (
        <Layout general={general}>
            <LifeBanner data={data} />
            <LifeMiddleSection data={data} />
            <Memories/>
            <BenefitsSection data={data} />
            <LifeTestimonials data={data} />
            <LifeEventsSection data={data} />
        </Layout>
    );
}

export async function getStaticProps() {
    try {
      const general = await MenuApi.genralSettings()
      const data = await LifeAtTurnBApi.index()
  
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
