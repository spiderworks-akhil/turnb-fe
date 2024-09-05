import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import Banner from "@/components/home/banner";
import AboutSection from "@/components/home/about";
import ExpertiseSection from "@/components/home/expertise";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Banner />
      <AboutSection />
      <ExpertiseSection />
    </Layout>
  );
}
