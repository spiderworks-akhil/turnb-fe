import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import LifeBanner from "@/components/life/banner";
import LifeMiddleSection from "@/components/life/middle";
import BenefitsSection from "@/components/life/benefits";
import LifeTestimonials from "@/components/life/testimonial";
import LifeEventsSection from "@/components/life/events";
import ContactBanner from "@/components/contact/banner";
import ContactForm from "@/components/contact/form";
import ContactMap from "@/components/contact/map";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
    return (
        <Layout>
            <ContactBanner />
            <ContactForm />
            <ContactMap />  
        </Layout>
    );
}
