import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import StageImg from '../../public/img/ai/stage.png'
import { HTMLParser } from '@/utils/HTMLParser';

const AiStages = ({data}) => {
  const stagesData = data?.content?.listing_id_ai_to_life?.length > 0 
    ? data.content.listing_id_ai_to_life.map(item => ({
        title: item.title,
        subheading: item.short_description,
        description: item.detailed_description,
        image: item.media_id?.file_path
      }))
    : [];

  return (
     <section className="ai-stage-sec">
      <div className="container">
        <div className="ai-stage-head">
          <span className="ai-stage-eyebrow">{data?.content?.title_3}</span>
          <h3 className="ai-stage-title">{HTMLParser(data?.content?.short_title_3)}</h3>
          <div className="ai-stage-desc">
            {HTMLParser(data?.content?.description_3)} 
          </div>
        </div>

        <div className="row">
          {/* Left side: Nav Pills */}
          <div className="col-md-4">
            <div
              className="nav flex-column nav-pills flex flex-col flex-nowrap"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {stagesData.map((tab, index) => {
                const tabId = `tab-${index + 1}`;
                return (
                  <button
                    key={tabId}
                    className={`nav-link ${index === 0 ? "active" : ""}`}
                    id={`${tabId}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${tabId}`}
                    type="button"
                    role="tab"
                    aria-controls={tabId}
                    aria-selected={index === 0 ? "true" : "false"}
                    style={{ textAlign: 'left' }}
                  >
                    <span>{tab?.title}</span>
                    {tab?.subheading && (
                      <>
                        <br />
                        <span style={{ fontStyle: 'italic', fontSize: '14px', opacity: 0.8 }}>
                          {tab.subheading}
                        </span>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side: Tab Content */}
          <div className="col-md-8">
            <div className="tab-content h-[100%]" id="v-pills-tabContent">
              {stagesData.map((tab, index) => {
                const tabId = `tab-${index + 1}`;
                return (
                  <div
                    key={tabId}
                    className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                    id={tabId}
                    role="tabpanel"
                    aria-labelledby={`${tabId}-tab`}
                    tabIndex="0"
                  >
                    <div className="tab-data">
                      {
                        tab?.image &&

                        <Image width={750} height={450} src={tab.image} alt="Stage"  />

                      }
                      
                      <h4>{tab?.title}</h4>
                      {tab?.subheading && (
                        <p style={{ fontStyle: 'italic', opacity: 0.8, marginBottom: '10px', marginTop: '-3px' }}>
                          {tab.subheading}
                        </p>
                      )}
                      <div className="mb-2 ai-tab-desc">{HTMLParser(tab?.description)}</div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className='m-0' style={{borderColor: '#c8c8c8ff'}} />

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ai-stage-sec .ai-stage-head {
          max-width: 900px;
          margin-bottom: 40px;
        }
        .ai-stage-sec .ai-stage-eyebrow {
          display: inline-block;
          color: #01847E;
          font-family: Montserrat;
          font-size: 12px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(1,132,126,0.08);
          border: 1px solid rgba(1,132,126,0.16);
          border-radius: 999px;
          padding: 7px 16px;
        }
        .ai-stage-sec .ai-stage-title {
          color: #212121;
          font-family: Montserrat;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.15;
          margin: 14px 0 0;
        }
        .ai-stage-sec .ai-stage-desc {
          margin: 16px 0 0;
          color: #5b7371;
          font-family: Montserrat;
          font-size: 16.5px;
          font-weight: 500;
          line-height: 1.7;
        }
        .ai-stage-sec .ai-stage-desc p {
          font-size: 16.5px;
          margin: 0;
        }
        @media (max-width: 767px) {
          .ai-stage-sec .ai-stage-head { margin-bottom: 30px; }
          .ai-stage-sec .ai-stage-title { font-size: 30px; }
          .ai-stage-sec .ai-stage-desc, .ai-stage-sec .ai-stage-desc p { font-size: 15px; }
          .ai-stage-sec .ai-tab-desc { margin-bottom: 40px !important; }
        }
      ` }} />
    </section>
  )
}

export default AiStages
