import Layout from '@/components/common/Layout'
import Memories from '@/components/life/memori'
import { LifeAtTurnBApi } from '@/Datas/Endpoints/LifeAtTurnb'
import { MenuApi } from '@/Datas/Endpoints/Menu'
import React from 'react'

function Remembering({general,data}) {
    return (
        <Layout general={general} data={data}>
           <div > <Memories /></div>
        </Layout>
    )
}

export default Remembering


export async function getStaticProps() {
    try {
        const general = await MenuApi.genralSettings()
        const data = await LifeAtTurnBApi.index()

        return {
            props: {
                general: general?.data,
                data: data?.data?.data,
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
