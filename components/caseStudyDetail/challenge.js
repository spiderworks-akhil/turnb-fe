import Link from 'next/link';
import Image from 'next/image';
import BreadCrumbs from '../common/breadCrumbs';

const CaseStudyChallenge = ({ data,staticPage }) => {

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <BreadCrumbs secondCrumb={staticPage?.title} secondCrumbLink={staticPage?.slug} thirdCrumb={data?.name} />
          </div>
        </div>
      </div>

      {/* Business Challenge Section */}
      <div className="container footer-content">
        <div
         
        >
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <h2 className='busi-hdgc' style={{ fontWeight: 'bold' }}>
                {/* {data?.content?.title_1} */}
                Business
                < br />
                Challenge:
              </h2>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="clearfix aos-init m-0 p-0 aos-animate" data-aos="fade-up">                                                                                                                                                                                                                                                                                                                                                                             

                
                <div className='="m-0 clearfix aos-init aos-animate case-challenge case-study-image' data-aos="fade-up"  > 
                 <h1>{data?.content?.h1_title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: data?.content?.description_1 }}/> 
                  



                </div>
             
             
              </div>
            </div>
          </div>
        </div>

        {/* TurnB Approach Section */}



      </div>
    </div>
  );
};

export default CaseStudyChallenge;
