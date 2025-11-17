import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import AiImg from '../../public/img/ai/cta.png'

const AiVision = ({data}) => {
  return (
    <section className='ai-vision-sec'>
      <div className='container'>
        <div className='row'>

            <div className='col-md-12 md-block d-none'>
            <div className='ai-vis-left'>
              <h3> {data?.content?.title_6}</h3> 
               <div dangerouslySetInnerHTML={{__html:data?.content?.description_6}}/>
           
            </div>
          </div>



          <div className='col-md-6 '>
            <div className='ai-vis-left'>
              <div className="md-hide"> 
              <h3> {data?.content?.title_6}</h3> 
               <div dangerouslySetInnerHTML={{__html:data?.content?.description_6}}/>
               </div>
              <div className='key-feat'>
                <h5> {data?.content?.listing_title_6}</h5>


                <ul>
           
                  {data?.content?.listing_id_vision?.map((item, index) => (
                      <li key={index}>{item?.title}</li> 
                  ))}
 
                </ul>
              </div>
            </div>
          </div>




          <div className='col-md-6 '>
            <div className='ai-vis-right'>
            <video
              src={data?.content?.vision_media_id?.file_path} // Place video in the "public/videos" folder
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiVision
