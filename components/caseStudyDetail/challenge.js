import Link from 'next/link';
import Image from 'next/image';

const CaseStudyChallenge = ({ data }) => {
  console.log(data);

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb mt-lg-5 mt-md-5 mt-3 mb-lg-4 mb-md-4 mb-3"
                style={{ fontSize: '16px' }}
              >
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link href="/case-studies">Case Studies</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Business Challenge Section */}
      <div className="container">
        <div
          style={{
            padding: '20px 0',
            backgroundColor: '#f9f9f9',
            marginBottom: '40px',
            borderRadius: '8px',
          }}
        >
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <h1 style={{ fontWeight: 'bold' }}>
                {data?.content?.title_1}:
              </h1>
            </div>
            <div className="col-lg-9 col-md-9 col-12">
              <div className='case-study-detail-challenge' style={{ listStyleType: 'none' }} dangerouslySetInnerHTML={{ __html: data?.content?.description_1 }} />
            </div>
          </div>
        </div>

        {/* TurnB Approach Section */}



      </div>
    </div>
  );
};

export default CaseStudyChallenge;
