import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import BannerIndustries from "@/components/industries/banner";
import RetailSection from "@/components/industries/description";
import SolutionAreas from "@/components/industries/solutions";
import IndustrySuccess from "@/components/industries/success";

const inter = Inter({ subsets: ["latin"] });

export default function Slug() {
    return (
        <Layout>
            <BannerIndustries />
            <RetailSection />
            <SolutionAreas />
            <IndustrySuccess />
        </Layout>
    );
}
