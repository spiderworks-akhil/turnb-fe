import Image from 'next/image'; 
import { ArrowRightIcon } from '../common/Button';

const AiBanner = ({data}) => {
    return (
        <section className="ai-banner-container">
           <video
        src={data?.content?.about_us_banner_media_id?.file_path} // Place video in the "public/videos" folder
        autoPlay
        loop
        muted
        playsInline 
        
      />

      <div className='ai-banner-cap d-flex align-items-center'>

        <div className='container'>

          <div style={{ maxWidth: "420px"}}>
         
            <h1 dangerouslySetInnerHTML={{__html:data?.content?.title_1}} />  

            <div dangerouslySetInnerHTML={{__html:data?.content?.description_1}} />

                <a className='btn' href={data?.content?.button_link}> {data?.content?.button_text} <ArrowRightIcon/> </a>
  </div>
        </div>

      </div>
         
        </section>
    );
};

export default AiBanner;
