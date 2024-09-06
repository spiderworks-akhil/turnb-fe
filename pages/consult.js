import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ConsultBanner from "@/components/consult/banner";
import ConsultStages from "@/components/consult/stages";
import AnalyticalConsultingSpectrum from "@/components/consult/analytics";


const inter = Inter({ subsets: ["latin"] });

export default function Consult() {
    return (
        <Layout>
            <ConsultBanner />
            <ConsultStages />
            <AnalyticalConsultingSpectrum />
        </Layout>
    );
}
