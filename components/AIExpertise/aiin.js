import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import AiImg from '../../public/img/ai/cta.png'

const AiIn = ({data}) => {

   const accordionItems = data?.content?.listing_id_ai_scanb || [];


  return (
    <section className='ai-in-sec'>
      <Image width={1450} height={660} src={data?.content?.scanb_banner_media_id?.file_path} />

      <div className='ai-in-cap'>
        <div className='container'>
          <div className='ai-in-cntr'>
            <h3> {data?.content?.title_5} </h3>
             <div dangerouslySetInnerHTML={{__html:data?.content?.description_5}}/>

              <div className="accordion" id="accordionExample">
      <div className="row">
        {[0, 1].map((col) => (
          <div className="col-md-6" key={col}>
            {accordionItems
              .filter((_, index) => index % 2 === col) // split into 2 cols
              .map((item, index) => {
                const globalIndex = col + index * 2; // keep global index
                const collapseId = `collapse-${globalIndex + 1}`;

                return (
                  <div className="accordion-item" key={collapseId}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          globalIndex === 0 ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={globalIndex === 0 ? "true" : "false"}
                        aria-controls={collapseId}
                      >
                        {item?.title}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        globalIndex === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="accordion-data">
                          <div dangerouslySetInnerHTML={{__html:item?.short_description}} /> 
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>




          </div>
        </div>
      </div>
    </section>
  )
}

export default AiIn
