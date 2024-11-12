import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import BlogDetailBanner from "@/components/blogsDetails/banner";
import SecondSection from "@/components/blogsDetails/SecondSection";
import ListingSections from "@/components/blogsDetails/listingSection";
import FooterSection from "@/components/blogsDetails/footerSection";
import { MenuApi } from "@/Datas/Endpoints/Menu";
import { BlogApi } from "@/Datas/Endpoints/Blogs";
import BlogContent from "@/components/blogsDetails/blogContent";

const inter = Inter({ subsets: ["latin"] });

export default function Career({general, data}) {
    
    return (
        <Layout general={general} data={data}>
            <BlogDetailBanner data={data} />
            <SecondSection data={data} />
            <BlogContent data={data} />
            {/* <ListingSections /> */}
            <FooterSection data={data} />
        </Layout>
    );
}

export async function getStaticPaths() {
    const list = [
        { slug: '5563738' }
    ]
    const paths = list?.map((item) => ({
        params: { slug: item?.slug },
    })) || [];

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
    try {

        const general = await MenuApi.genralSettings()
        const data = await BlogApi.detail({ slug: context?.params?.slug })
        return {
            props: {
                general: general?.data, data: data?.data?.data
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error('Error fetching header data:', error);

        return {
            props: {
                header: null, // or handle the error in a way that makes sense for your application
            },
            revalidate: 10,
            notFound: true
        };
    }
}
