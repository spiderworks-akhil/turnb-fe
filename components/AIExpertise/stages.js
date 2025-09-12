import Image from 'next/image'
import { ArrowRightIcon } from '../common/Button'
import StageImg from '../../public/img/ai/stage.png'

const AiStages = ({data}) => {
  return (
     <section className="ai-stage-sec">
      <div className="container">
        <h4>{data?.content?.title_3}</h4>

        <div className="row">
          {/* Left side: Nav Pills */}
          <div className="col-md-4">
            <div
              className="nav flex-column nav-pills"
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
            <div className="tab-content" id="v-pills-tabContent">
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
      </div>
    </section>
  )
}

export default AiStages
