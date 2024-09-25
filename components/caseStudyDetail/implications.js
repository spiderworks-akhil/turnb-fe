import Image from 'next/image'
import React from 'react'

function Implications({data}) {
  return (
    <div className="container">
       {/* Implications Section */}
       <div
          style={{
            padding: '20px 0',
            // backgroundColor: '#f9f9f9',
            borderRadius: '8px',
          }}
        >
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <h2>Implications</h2>
              <div
                style={{
                  width: '100px',
                  height: '4px',
                  backgroundColor: '#000',
                  margin: '10px 0',
                }}
              ></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-7 col-12">
            <div style={{backgroundColor:'white'}} className='case-study-approach' dangerouslySetInnerHTML={{ __html: data?.content?.description_3 }} />

              {/* <p>Following were the outcomes after designing the incentive program model:</p>

              {[
                {
                  img: '/img/c1-blue.png',
                  text: 'Proactive course correction measures were taken.',
                },
                {
                  img: '/img/c1-darkblue.png',
                  text: 'There was a significant sales lift.',
                },
                {
                  img: '/img/c1-blue.png',
                  text: 'Customer satisfaction increased.',
                },
                {
                  img: '/img/c1-darkblue.png',
                  text: 'Skill gaps were gradually reduced around emerging technologies.',
                },
              ].map((item, index) => (
                <div className="row" key={index} style={{ marginBottom: '10px' }}>
                  <div className="col-lg-1 col-md-1 col-2">
                    <Image
                      src={item.img}
                      alt="Implication"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="col-lg-11 col-md-11 col-10">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))} */}
            </div>

            {/* Image on the Right */}
            <div className="col-lg-5 col-md-5 col-12">
              <Image
                src={data?.content?.media_id_3?.file_path}
                alt={data?.content?.media_id_3?.alt_text}
                width={500}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Implications
