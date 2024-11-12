import React from 'react';
import Link from 'next/link'; // If you're using Next.js, otherwise replace it with a normal <a> tag.
import { MenuApi } from '@/Datas/Endpoints/Menu';

const ThankYouPage = ({general}) => {
  return (
    <Layout general={general} >
      <div className='thank-u  text-center clearfix' style={{ borderBottom: '0px' }}>
        <div className="container">
          {/* Centered Row */}
          <div className="row d-flex justify-content-center">
            {/* Logo image is commented out */}
            {/* 
            <div className="col-md-12">
              <Link href="/">
                <img src="/img/logo-home.png" alt="Logo" className="mb-md-4 mb-3 img-fluid" />
              </Link>
            </div> 
            */}
          </div>

          {/* Main Content Row */}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-6 col-12 text-center">
              <h2 className="mt-lg-3 mt-md-3 mt-2" style={{ color: '#018381' }}>THANK YOU!</h2>

              {/* Image */}
              <img src="/img/correct.png" alt="Correct" className="img-fluid mb-4" />

              {/* Thank You Message */}
              <h4 className="mb-1">Your submission has been received.</h4>

              {/* Button Link */}
              <div className="mg-btn clearfix">
                <Link href="/" className="btn btn-primary btn-blueback" style={{ backgroundColor: '#018381' }}>
                  Back To Home
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;


export async function getStaticProps() {
  try {
      const general = await MenuApi.genralSettings()

      return {
          props: {
              general: general?.data,
             
          },
          revalidate: 10,
      };
  } catch (error) {
      console.error('Error fetching header data contact:', error);

      return {
          props: {
              header: null, // or handle the error in a way that makes sense for your application
          },
          revalidate: 10,
      };
  }
}