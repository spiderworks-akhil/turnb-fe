import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import CaseBanner from "@/components/caseStudy/banner";
import CaseStudiesList from "@/components/caseStudy/caseStudies";

const inter = Inter({ subsets: ["latin"] });

export default function CaseStudy() {
    return (
        <Layout>
            <CaseBanner />
            <CaseStudiesList />
        </Layout>
    );
}
