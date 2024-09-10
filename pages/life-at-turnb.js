import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import LifeBanner from "@/components/life/banner";
import LifeMiddleSection from "@/components/life/middle";
import BenefitsSection from "@/components/life/benefits";
import LifeTestimonials from "@/components/life/testimonial";
import LifeEventsSection from "@/components/life/events";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <Layout>
            <LifeBanner />
            <LifeMiddleSection />
            <BenefitsSection />
            <LifeTestimonials />
            <LifeEventsSection />
        </Layout>
    );
}
