import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import FeatImg from '../../public/img/ai/feat.png'

const AiFeatures = ({data}) => {
  return (
    <section className='ai-features-sec'>
      <div className='container '>
        <h3>  {data?.content?.title_4}  </h3>

   {data?.content?.listing_id_future_points?.map((feat, index) => (
          <div className="feat-list" key={index} style={{ "--i": index + 1 }}>
            <div className="row">
              <div className="col-md-5">
                <Image
                  width={750}
                  height={350}
                  src={feat?.media_id?.file_path}
                  alt={feat?.alt_text}
                />
              </div>
              <div className="col-md-7">
                <span>{String(index + 1).padStart(2, "0")}.</span>
                <h4>{feat?.title}</h4>
                <div dangerouslySetInnerHTML={{__html:feat?.detailed_description}}/> 
                
              </div>
            </div>
          </div>
        ))}

        {/* Extra Background Feature Block */}
        <div className="feat-list feat-bg"></div>
      </div>
    </section>
  )
}

export default AiFeatures
