import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import ServiceBanner from "@/components/service/banner";
import ServicesSection from "@/components/service/servicelisting";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <Layout>
           <ServiceBanner />
           <ServicesSection />
        </Layout>
    );
}
