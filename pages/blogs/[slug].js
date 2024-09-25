import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import BlogDetailBanner from "@/components/blogsDetails/banner";
import SecondSection from "@/components/blogsDetails/SecondSection";
import ListingSections from "@/components/blogsDetails/listingSection";
import FooterSection from "@/components/blogsDetails/footerSection";

const inter = Inter({ subsets: ["latin"] });

export default function Career() {
    return (
        <Layout>
            <BlogDetailBanner />
            <SecondSection />
            <ListingSections />
            <FooterSection />
        </Layout>
    );
}
