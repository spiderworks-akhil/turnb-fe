import React from 'react'
import FAQAccordion from '../service/FAQAccordion'

function SerFaq({data}) {
    return (
        <div className="container pt-10">
            <FAQAccordion data={data} />
        </div>
    )
}

export default SerFaq
