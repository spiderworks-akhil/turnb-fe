import Image from 'next/image'
import { ArrowRightIcon, SqureDotsIcon } from '../common/Button'
import AiImg from '../../public/img/ai/cta.png'

const AiBenefits = ({data}) => {
  return (
    <section className='ai-benefits-sec'>
      <div className='container'>
        <h3> {data?.content?.title_7} </h3>

        <div className='row'>

 {data?.content?.listing_id_benefits?.map((item, index) => (
                      
 

                       <div key={index} className='col-md-6 d-flex align-items-top ai-benefits-list'>
             <SqureDotsIcon/>

             <p>{item?.title}</p>
                </div>




                  ))}

         
 

         
        </div>
      </div>
    </section>
  )
}

export default AiBenefits
