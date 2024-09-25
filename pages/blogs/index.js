import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import BlogBanner from "@/components/blogs/banner";
import BlogList from "@/components/blogs/blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Career() {
    return (
        <Layout>
            <BlogBanner />
            <BlogList />

        </Layout>
    );
}
