import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import BlogBanner from "@/components/blogs/banner";
import BlogList from "@/components/blogs/blogs";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { BlogApi } from "@/Datas/Endpoints/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Career({general,data,list}) {
    return (
        <Layout general={general} data={data}>
            <BlogBanner data={data} />
            <BlogList data={data} list={list} />
        </Layout>
    );
}


export async function getStaticProps() {
    try {
      const general = await MenuApi.genralSettings()
      const data = await BlogApi.index()
      const list = await BlogApi.list({limit:100)
      return {
        props: {
          general:general?.data,
          data: data?.data?.data,
          list: list?.data
        },
        revalidate: 10,
      };
    } catch (error) {
      console.error('Error fetching header data contact:', error);
  
      return {
        props: {
          header: null, // or handle the error in a way that makes sense for your application
        },
        revalidate: 10,
      };
    }
  }
