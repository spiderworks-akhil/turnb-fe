import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import Banner from "@/components/home/banner";
import AboutSection from "@/components/home/about";
import ExpertiseSection from "@/components/home/expertise";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { HomeApi } from "@/Datas/Endpoints/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home({general,data}) {
    
  return (
    <Layout general={general} data={data}>
      <Banner data={data} />
      <AboutSection data={data} />
      <ExpertiseSection data={data} />
    </Layout>
  );
}


export async function getStaticProps() {
  try {
    const general = await MenuApi.genralSettings()
    const data = await HomeApi.index()

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
