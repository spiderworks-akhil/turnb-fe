import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import CareerBanner from "@/components/career/banner";
import WhyWorkWithTurnB from "@/components/career/why-work-with";
import CareerSection from "@/components/career/career";

const inter = Inter({ subsets: ["latin"] });

export default function Career() {
    return (
        <Layout>
            <CareerBanner />
            <WhyWorkWithTurnB />
            <CareerSection />
        </Layout>
    );
}
