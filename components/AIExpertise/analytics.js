import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'

const AiAnalytics = ({data}) => {
  return (
    <section className='ai-analytics-sec'>
      <div className='container'>
        <h3> {data?.content?.title_2} </h3>
        <video
          src={data?.content?.analytics_banner_media_id?.file_path} // Place video in the "public/videos" folder
          autoPlay
          loop
          muted
          playsInline
        />

        <div dangerouslySetInnerHTML={{__html:data?.content?.description_2}}/> 
           
      </div>
    </section>
  )
}

export default AiAnalytics
