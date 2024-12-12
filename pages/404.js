import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { RedirectApi } from '@/Datas/Endpoints/Redirect';
import Link from 'next/link';
import Head from 'next/head';
import StaticSEO from '@/components/common/StaticSEO';

function NotFound({ data }) {
    const router = useRouter();
    const fromUrl = router.asPath.substring(1);
    const searchedUrl = data?.find(obj => obj.redirect_from === fromUrl);

    useEffect(() => {
        if (searchedUrl) {
            router.push(`/${searchedUrl?.redirect_to}`);
        }
    }, [searchedUrl, router]);

    return (
        <>
            <StaticSEO title={'Page not found'} />
            <div style={styles.container}>
                <h1 style={styles.header}>404 - Page Not Found</h1>
                <p style={styles.message}>It looks like the page you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/" passHref>
                    <div style={styles.homeLink}>Go Back Home</div>
                </Link>
            </div>
        </>
    );
}

export async function getStaticProps() {
    try {
        const data = await RedirectApi.list();

        return {
            props: {
                data: data?.data,
            },
            revalidate: 10,
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            props: {
                data: null,
            },
            revalidate: 10,
        };
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#252525', // Dark background similar to TurnB
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
    },
    header: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#1C9CD9', // Highlight color inspired by TurnB's accents
        marginBottom: '20px',
    },
    message: {
        fontSize: '1.5rem',
        color: '#AAAAAA', // Subdued gray for the message
        marginBottom: '30px',
    },
    homeLink: {
        fontSize: '1.2rem',
        color: '#1C9CD9',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
};

export default NotFound;
