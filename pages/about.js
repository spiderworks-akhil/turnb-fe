import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import AboutBanner from "@/components/about/banner";
import AboutWhoWeAreSection from "@/components/about/who_we_are";
import AboutWhyUsBanner from "@/components/about/why_us";
import CoreValuesSection from "@/components/about/core";
import MilestonesSection from "@/components/about/milestones";
import KeyMembersSection from "@/components/about/members";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
    return (
        <Layout>
            <AboutBanner />
            <AboutWhoWeAreSection />
            <AboutWhyUsBanner />
            <CoreValuesSection />
            <MilestonesSection />
            <KeyMembersSection />
        </Layout>
    );
}
