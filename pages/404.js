import Layout from '@/components/common/Layout';
import { MenuApi } from '@/Datas/Endpoints/Menu';
import { RedirectApi } from '@/Datas/Endpoints/Redirect';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function NotFound({ general, data }) {

    const router = useRouter()
    const fromUrl = router.asPath.substring(1)
    const searchedUrl = data?.find(obj => obj.redirect_from === fromUrl);
    useEffect(() => {
        if (searchedUrl) {
            router.push(`/${searchedUrl?.redirect_to}`)
        }
    }, []);

    return (
        <Layout general={general}>
            404
        </Layout>
    )
}

export default NotFound


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await RedirectApi.list()

        return {
            props: {
                general: general?.data,
                data: data?.data,
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error('Error fetching header data:', error);

        return {
            props: {
                data: null,
            },
            revalidate: 10,
            // notFound: true
        };
    }
}
