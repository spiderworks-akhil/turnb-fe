import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'

const AiAnalytics = ({ data }) => {
  return (
    <section className='ai-analytics-sec'>
      <div className='container'>
        <style>{`
          .eyebrow-subtitle {
            color:  #018689!important;
          }
          // @media (min-width: 1500px) {
          //   .desc {
          //     margin-left: -75px !important;
          //   }
          // }
        `}</style>
        <div className="text-start mb-4">
          <span className="eyebrow-subtitle" style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '30px', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px', fontWeight: '300', marginBottom: '16px' }}>
            {data?.content?.subtitle_2 || "How AI creates value"}
          </span>
          <h3 className='text-white text-start m-2'> {data?.content?.title_23 || "Pick a problem. See what changes."} </h3>
          <div className="text-start " dangerouslySetInnerHTML={{ __html: data?.content?.description_2 }} />
        </div>

        {/* <div className="mb-4 text-center">
          <Image src="/img/bigdata-con.jpg" width={800} height={450} alt="AI Analytics" className="img-fluid rounded mx-auto d-block" style={{ maxWidth: '700px', width: '100%', height: 'auto', objectFit: 'cover' }} />
        </div> */}

        {/* <video
          src={data?.content?.analytics_banner_media_id?.file_path} // Place video in the "public/videos" folder
          autoPlay
          loop
          muted
          playsInline
        /> */}



      </div>

    </section>
  )
}

export default AiAnalytics
