import Head from 'next/head'
import React from 'react'

function StaticSEO({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="https://manage.turnb.com/uploads/settings/favicon-16x1666ff813b9c9c2.png" />
        </Head>
    )
}

export default StaticSEO
