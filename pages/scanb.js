import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ScanbBanner from "@/components/scanb/banner";
import ScanRetailSection from "@/components/scanb/retail";
import ScanbAdvance from "@/components/scanb/scanb";
import ProductTell from "@/components/scanb/story";
import ScanBGrowth from "@/components/scanb/growth";
import ScanbFeatures from "@/components/scanb/features";
import ScanbImpact from "@/components/scanb/impact";
import BookDemoSection from "@/components/scanb/achieve";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { ScanbApi } from "@/Datas/Endpoints/Scanb";

const inter = Inter({ subsets: ["latin"] });

export default function Career({ general, data }) {
    
    return (
        <Layout general={general} data={data}>
            <ScanbBanner data={data} />
            <ScanRetailSection data={data} />
            <ScanbAdvance data={data} />
            <ProductTell data={data} />
            <ScanBGrowth data={data} />
            <ScanbFeatures data={data} />
            <ScanbImpact data={data} />
            <BookDemoSection data={data} />
        </Layout>
    );
}


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await ScanbApi.index()

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