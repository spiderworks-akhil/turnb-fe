import Image from 'next/image'
import Slider from 'react-slick'
import { ArrowRightIcon, SqureDotsIcon } from '../common/Button'
import CaseiImg from '../../public/img/ai/case.png'

const AiCase = ({data}) => {

  const caseStudies = data?.other_sections?.case_studies || []

  const sliderSettings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: caseStudies.length > 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: caseStudies.length > 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: caseStudies.length > 1
        }
      }
    ]
  }

  return (
    <>


      <section className='ai-case-sec'>
      <div className='container'>

        <div className='case-title'>
            <span>  {data?.content?.short_title_8} </span>
            <h3> {data?.content?.title_8} </h3>
        </div>


        {caseStudies.length > 0 && (
          <div className='case-slider'>
            <Slider {...sliderSettings}>
              {caseStudies.map((item, index) => (
                <div key={index}>
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
            </Slider>
          </div>
        )}


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

      <style dangerouslySetInnerHTML={{ __html: `
        .ai-case-sec .case-slider {
          margin: 0 -12px 60px;
        }
        .ai-case-sec .case-slider .slick-list { padding-bottom: 12px; }
        /* equal-height cards regardless of copy length */
        .ai-case-sec .case-slider .slick-track {
          display: flex;
          align-items: stretch;
        }
        .ai-case-sec .case-slider .slick-slide {
          height: auto;
          float: none;
        }
        .ai-case-sec .case-slider .slick-slide > div {
          height: 100%;
          padding: 0 12px;
        }
        .ai-case-sec .case-slider .case-list {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .ai-case-sec .case-slider .case-list .btn { margin-top: auto; }

        /* arrows — the global .slick-next { left: 14px !important } has to be undone here */
        .ai-case-sec .case-slider .slick-prev,
        .ai-case-sec .case-slider .slick-next {
          width: 44px;
          height: 44px;
          top: 38%;
          z-index: 2;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
        }
        .ai-case-sec .case-slider .slick-prev { left: -18px !important; right: auto !important; }
        .ai-case-sec .case-slider .slick-next { left: auto !important; right: -18px !important; }
        .ai-case-sec .case-slider .slick-prev::before,
        .ai-case-sec .case-slider .slick-next::before {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 22px;
          height: 22px;
        }

        @media (max-width: 1199px) {
          .ai-case-sec .case-slider .slick-prev { left: 4px !important; }
          .ai-case-sec .case-slider .slick-next { right: 4px !important; }
        }
        @media (max-width: 575px) {
          .ai-case-sec .case-slider { margin: 0 -8px 50px; }
          .ai-case-sec .case-slider .slick-slide > div { padding: 0 8px; }
        }
      ` }} />
    </section>



    </>

  )
}

export default AiCase
