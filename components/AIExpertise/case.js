import Image from 'next/image'
import { ArrowRightIcon, SqureDotsIcon } from '../common/Button'
import CaseiImg from '../../public/img/ai/case.png'

const AiCase = ({data}) => {
  return (
    <section className='ai-case-sec'>
      <div className='container'>

        <div className='case-title'>
            <span>  {data?.content?.short_title_8} </span>
            <h3> {data?.content?.title_8} </h3> 
        </div>
        


        <div className='row'> 
             {data?.other_sections?.case_studies?.map((item, index) => (

 
 

  <div className='col-md-4' key={index} >
                <div className='case-list'>  
                    <Image width={370} height={205} src={item?.featured_image?.file_path}  alt={item?.media_id?.alt_text} />
                    <h4>
                       {item?.name?.length > 50
                        ? item.name.slice(0, 50) + "..."
                        : item?.name}
                        </h4>
                    <p>
                      {item?.short_description?.length > 100
                        ? item.short_description.slice(0, 100) + "..."
                        : item?.short_description}
                    </p>
                    <a className='btn' href={`/case-studies/${item?.slug}`}> Read More </a> 
                </div> 
            </div>
                      
 
 




                  ))}

 

        </div>


         <div className='case-bottum'>
             <div className='row'>
                <div className='col-md-6'>
                    <div dangerouslySetInnerHTML={{__html:data?.content?.description_8}}/>  
                </div>

                <div className='col-md-6'>
                    <a className='btn' href={data?.content?.explore_all_link}> {data?.content?.explore_all} <ArrowRightIcon/></a> 
                </div>

             </div>
        </div>



        
 
      </div>
    </section>
  )
}

export default AiCase
