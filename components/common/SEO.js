import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react'

function SEO({ data, settings }) {
    const router = useRouter();
    const canonicalPathname = router?.asPath.split('?')[0];

    return (
        <Head>

            {/* <meta name="google-site-verification" content="yJZ7VXN-hsMlmKiEb5QDU7maaHtSBkoK2MyH0lCtlaQ" /> */}

            {/* <link rel="canonical" href={`https://www.bmyholisticwellness.com${canonicalPathname == '/index' ? '/' : canonicalPathname}`} /> */}

            <link rel="icon" href={settings?.fav_icon} />

            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            {
                data &&
                <>
                    <title>{data?.browser_title || data?.title || data?.name}</title>
                    <meta name="keywords" content={data?.meta_keywords} />
                    <meta name="description" content={data?.meta_description} />

                    {/* Open Graph Meta Tags for Social Sharing */}
                    <meta property="og:title" content={data?.og_title || data?.browser_title} />
                    <meta property="og:description" content={data?.og_description || data?.meta_description} />
                    <meta property="og:image" content={data?.og_image?.file_path || data?.banner_image?.file_path} />
                    <meta property="og:image:alt" content={data?.og_image?.alt_text || 'Alt Text for Image'} />

                    <meta name="twitter:card" content={'summary_large_image'} />
                    <meta name="twitter:image:alt" content={data?.og_image?.alt_text || data?.banner_image?.alt_text || 'Alt Text for Image'} />
                    <meta name="twitter:title" content={data?.og_title ? data?.og_title : data?.browser_title} />
                    <meta name="twitter:description" content={data?.og_description ? data?.og_description : data?.meta_description} />
                    <meta name="twitter:image" content={data?.og_image?.file_path || data?.banner_image?.file_path}></meta>
                </>
            }
        </Head>
    )
}

export default SEO
