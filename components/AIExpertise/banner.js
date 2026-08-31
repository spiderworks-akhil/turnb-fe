import Image from 'next/image';
import { ArrowRightIcon } from '../common/Button';

const AiBanner = ({ data }) => {
  return (
    <section className="ai-banner-container">
      <video
        src={data?.content?.about_us_banner_media_id?.file_path} // Place video in the "public/videos" folder
        autoPlay
        loop
        muted
        playsInline

      />

      <div className='ai-banner-cap d-flex align-items-center'>

        <div className='container'>

          <div style={{ maxWidth: "600px" }}>
            <h1
              style={{ fontSize: '40px' }}
              dangerouslySetInnerHTML={{ __html: data?.content?.title_1 }}
            />

            <div dangerouslySetInnerHTML={{ __html: data?.content?.description_1 }} />

            <div className="d-flex gap-4 mt-4">
              <a className='btn d-flex align-items-center justify-content-center' style={{ whiteSpace: 'nowrap' }} href={data?.content?.button_link}>
                <span>{data?.content?.button_text}</span> <ArrowRightIcon />
              </a>
              <a className='btn d-flex align-items-center justify-content-center' style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', whiteSpace: 'nowrap' }} href={data?.content?.button_link_2 || '#'}>
                <span>{data?.content?.button_text_2 || 'Learn More'}</span> <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AiBanner;
