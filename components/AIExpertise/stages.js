import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import StageImg from '../../public/img/ai/stage.png'

const AiStages = ({data}) => {
  return (
     <section className="ai-stage-sec">
      <div className="container">
        <div className="ai-stage-head">
          <span className="ai-stage-eyebrow">{data?.content?.title_3 || "How We Bring AI to Life"}</span>
          <h3 className="ai-stage-title">Your AI runs on Consult D5&trade;</h3>
          <p className="ai-stage-desc">
            Five stages, built over years of delivery and applied to every engagement we take
            on. Here is what each one produces.
          </p>
        </div>

        <div className="row">
          {/* Left side: Nav Pills */}
          <div className="col-md-4">
            <div
              className="nav flex-column nav-pills flex flex-col"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {data?.content?.listing_id_analytics?.map((tab, index) => {
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
                  >
                    {tab?.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side: Tab Content */}
          <div className="col-md-8">
            <div className="tab-content h-[100%]" id="v-pills-tabContent">
              {data?.content?.listing_id_analytics?.map((tab, index) => {
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
                        tab?.media_id?.file_path &&

                        <Image width={750} height={350} src={tab?.media_id?.file_path} alt="Stage" />

                      }
                      
                      <h4>{tab?.title}</h4>
                      <p>{tab?.short_description}</p>
                      
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
        @media (max-width: 767px) {
          .ai-stage-sec .ai-stage-head { margin-bottom: 30px; }
          .ai-stage-sec .ai-stage-title { font-size: 30px; }
          .ai-stage-sec .ai-stage-desc { font-size: 15px; }
        }
      ` }} />
    </section>
  )
}

export default AiStages
