import Layout from '@/components/common/Layout'
import SerDetBanner from '@/components/serviceDetail/banner'
import SerFaq from '@/components/serviceDetail/faq'
import FifthSection from '@/components/serviceDetail/fifthSection'
import FourthSection from '@/components/serviceDetail/fourthSection'
import SixthSection from '@/components/serviceDetail/sixthSection'
import ThirdSection from '@/components/serviceDetail/thirdSection'
import { MenuApi } from '@/Datas/Endpoints/Menu'
import { ServicesApi } from '@/Datas/Endpoints/Services'
import React from 'react'

function ServiceDetail({ general, data }) {

  

  return (
    <Layout general={general} data={data}>
      <SerDetBanner data={data} />
      <ThirdSection data={data} />
      <FourthSection data={data} />
      {
        (data?.content?.description_4 || data?.content?.title_4) &&
        <FifthSection data={data} />
      }
      {
        (data?.content?.description_5 || data?.content?.title_5) &&
        <SixthSection data={data} />
      }
      {
        data?.faq?.length > 0 &&
        <SerFaq data={data?.faq} />
      }
    </Layout>
  )
}

export default ServiceDetail

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
    const data = await ServicesApi.detail({ slug: context?.params?.slug })
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
