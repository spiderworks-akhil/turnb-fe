import { RedirectApi } from '@/Datas/Endpoints/Redirect';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function NotFound({ data }) {

    const router = useRouter()
    const fromUrl = router.asPath.substring(1)
    const searchedUrl = data?.find(obj => obj.redirect_from === fromUrl);
    useEffect(() => {
        if (searchedUrl) {
            router.push(`/${searchedUrl?.redirect_to}`)
        }
    }, []);

    return (
        <div>
            404
        </div>
    )
}

export default NotFound


export async function getStaticProps() {
    try {

        const data = await RedirectApi.list()

        return {
            props: {
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
