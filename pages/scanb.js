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

const inter = Inter({ subsets: ["latin"] });

export default function Career() {
    return (
        <Layout>
            {/* <ScanbBanner /> */}
            <ScanRetailSection />
            <ScanbAdvance />
            <ProductTell />
            <ScanBGrowth />
            <ScanbFeatures />
            <ScanbImpact />
            <BookDemoSection />
        </Layout>
    );
}
